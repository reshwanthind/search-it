function Error() {
    return (
        <div style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--prime-blue)',
            fontWeight: 600,
            fontSize: '2rem',
            letterSpacing: '2px',
            textShadow: '0 2px 8px rgba(0,160,214,0.08)',
            animation: 'fadeInError 1s',
        }}>
            Not Found
            <style>{`
                @keyframes fadeInError {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: none; }
                }
            `}</style>
        </div>
    );
}

export default Error;