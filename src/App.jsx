import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState(null);
  const [signal, setSignal] = useState(null);

  const API_BASE = 'https://crypto-analyzer.onrender.com'; // asigură-te că e corect!

  const analyzeSentiment = async () => {
  console.log("Apasat pe Analizează Sentiment");
  const res = await fetch(`${API_BASE}/sentiment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  const data = await res.json();
  setSentiment(data.score.toFixed(2));
};
      const res = await fetch(`${API_BASE}/sentiment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      const data = await res.json();
      setSentiment(data.score.toFixed(2));
    } catch (err) {
      console.error('Eroare la analiză:', err);
    }
  };

  const fetchSignal = async () => {
  console.log("Apasat pe Primește Semnal");
  const res = await fetch(`${API_BASE}/signal`);
  const data = await res.json();
  setSignal(data);
};
      const res = await fetch(`${API_BASE}/signal`);
      const data = await res.json();
      setSignal(data);
    } catch (err) {
      console.error('Eroare la semnal:', err);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🧠 Crypto Analyzer Dashboard</h1>

      <textarea
        rows={4}
        cols={50}
        placeholder="Scrie un text despre un crypto..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button onClick={analyzeSentiment}>Analizează Sentiment</button>
      <button onClick={fetchSignal} style={{ marginLeft: '1rem' }}>Primește Semnal</button>

      {sentiment && <p>📊 Scor Sentiment: <strong>{sentiment}</strong></p>}

      {signal && (
        <div>
          <p>🔔 Semnal: <strong>{signal.signal}</strong></p>
          <p>💰 Coin: {signal.coin}</p>
          <p>📈 Încredere: {signal.confidence}</p>
        </div>
      )}
    </div>
  );
}

export default App;