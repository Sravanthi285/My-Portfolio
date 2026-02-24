import React, { useState, useEffect, useRef } from 'react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([
        { role: 'assistant', content: "Hi! I'm Sravanthi's AI assistant. Ask me anything about her experience or projects!" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
            const response = await fetch(`${apiBaseUrl}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: input,
                    history: messages.slice(1) // Send history excluding the initial greeting
                }),
            });

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting to my brain right now. Please try again later!" }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 2000 }}>
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="glass"
                style={{
                    width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary)',
                    border: 'none', color: 'white', cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)'
                }}
            >
                {isOpen ? '✕' : '💬'}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="glass" style={{
                    position: 'absolute', bottom: '80px', right: 0, width: '350px', height: '500px',
                    display: 'flex', flexDirection: 'column', overflow: 'hidden', animation: 'fadeIn 0.3s ease'
                }}>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', background: 'rgba(99, 102, 241, 0.1)' }}>
                        <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Chat with AI Assistant</h3>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>Powered by OpenRouter</p>
                    </div>

                    <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {messages.map((msg, i) => (
                            <div key={i} style={{
                                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                maxWidth: '80%', padding: '0.8rem 1rem', borderRadius: '12px',
                                background: msg.role === 'user' ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                                fontSize: '0.9rem'
                            }}>
                                {msg.content}
                            </div>
                        ))}
                        {isLoading && (
                            <div style={{ alignSelf: 'flex-start', padding: '0.8rem 1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', fontSize: '0.9rem' }}>
                                Thinking...
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div style={{ padding: '1rem', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '0.5rem' }}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask me anything..."
                            style={{
                                flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)',
                                borderRadius: '8px', padding: '0.5rem 1rem', color: 'white', outline: 'none'
                            }}
                        />
                        <button
                            onClick={handleSend}
                            style={{ background: 'var(--primary)', border: 'none', color: 'white', borderRadius: '8px', padding: '0.5rem 1rem', cursor: 'pointer' }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;
