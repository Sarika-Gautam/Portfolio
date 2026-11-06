import { useEffect, useState } from "react";
import { apiRequest } from "./api";
import "./Admin.css";

function Admin() {
  const [token, setToken] = useState(
    sessionStorage.getItem("adminToken") || ""
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const authHeaders = {
    Authorization: `Bearer ${token}`
  };

  const loadMessages = async () => {
    try {
      setLoading(true);
      const result = await apiRequest("/contact", {
        headers: authHeaders
      });
      setMessages(result.data);
      setError("");
    } catch (err) {
      setError(err.message);
      if (err.message.includes("token") || err.message.includes("Authentication")) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) loadMessages();
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const result = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password })
      });

      sessionStorage.setItem("adminToken", result.token);
      setToken(result.token);
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("adminToken");
    setToken("");
    setMessages([]);
  };

  const markAsRead = async (id) => {
    try {
      await apiRequest(`/contact/${id}/read`, {
        method: "PATCH",
        headers: authHeaders
      });
      await loadMessages();
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) {
      return;
    }

    try {
      await apiRequest(`/contact/${id}`, {
        method: "DELETE",
        headers: authHeaders
      });
      await loadMessages();
    } catch (err) {
      setError(err.message);
    }
  };

  if (!token) {
    return (
      <main className="admin-page">
        <form className="admin-login" onSubmit={handleLogin}>
          <h1>Admin Login</h1>
          <p>Sign in to manage portfolio messages.</p>

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
          {error && <p className="admin-error">{error}</p>}
        </form>
      </main>
    );
  }

  return (
    <main className="admin-page">
      <header className="admin-header">
        <div>
          <h1>Portfolio Admin</h1>
          <p>Manage your contact messages</p>
        </div>
        <button onClick={logout}>Logout</button>
      </header>

      <section className="admin-stats">
        <div className="admin-card">
          <span>Total Messages</span>
          <strong>{messages.length}</strong>
        </div>
        <div className="admin-card">
          <span>Unread Messages</span>
          <strong>{messages.filter((m) => !m.isRead).length}</strong>
        </div>
      </section>

      <h2>Contact Messages</h2>

      {error && <p className="admin-error">{error}</p>}
      {loading && <p>Loading messages...</p>}

      {!loading && messages.length === 0 && (
        <p>No messages received yet.</p>
      )}

      <section className="admin-messages">
        {messages.map((message) => (
          <article className="admin-message" key={message._id}>
            <div className="message-top">
              <h3>{message.name}</h3>
              <span>{message.isRead ? "Read" : "Unread"}</span>
            </div>

            <p><strong>Email:</strong> {message.email}</p>
            <p><strong>Subject:</strong> {message.subject}</p>
            <p>{message.message}</p>
            <small>
              {new Date(message.createdAt).toLocaleString()}
            </small>

            <div className="message-actions">
              {!message.isRead && (
                <button onClick={() => markAsRead(message._id)}>
                  Mark as Read
                </button>
              )}

              <button
                className="delete-button"
                onClick={() => deleteMessage(message._id)}
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Admin;