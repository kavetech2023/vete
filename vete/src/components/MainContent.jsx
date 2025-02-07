import React, { useState, useEffect } from 'react';
import { FaFire, FaStar, FaClock } from 'react-icons/fa';
import { fetchTodayMatches } from '../services/api';

function MainContent() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOdds, setSelectedOdds] = useState({});
  const [matchOdds, setMatchOdds] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const todayMatches = await fetchTodayMatches();
      
      // Generate odds once for all matches
      const generatedOdds = {};
      todayMatches.forEach(match => {
        generatedOdds[match.fixture.id] = {
          '1': (Math.random() * 2 + 1.1).toFixed(2),
          'X': (Math.random() * 2 + 2.1).toFixed(2),
          '2': (Math.random() * 2 + 1.1).toFixed(2)
        };
      });
      
      setMatchOdds(generatedOdds);
      setMatches(todayMatches);
      setLoading(false);
    };

    fetchData();
  }, []);

  const formatMatchTime = (match) => {
    const utcDate = new Date(match.fixture.date);
    const localDate = new Date(utcDate.getTime());
  
    return localDate.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true // Use 12-hour format with AM/PM
    });
  };
  

  const handleOddSelection = (matchId, oddType, oddValue) => {
    setSelectedOdds(prevOdds => {
      if (prevOdds[matchId]?.oddType === oddType) {
        const { [matchId]: _, ...rest } = prevOdds;
        return rest;
      }
      
      return {
        ...prevOdds,
        [matchId]: {
          oddType,
          oddValue,
          timestamp: new Date().toISOString(),
          matchId
        }
      };
    });
  };

  const isOddSelected = (matchId, oddType) => {
    return selectedOdds[matchId]?.oddType === oddType;
  };

  return (
    <div className="main-content">
      <div className="section-header">
        <h2>Today's Football Matches</h2>
        <div className="match-filters">
          <button className="btn btn-outline">
            <FaFire /> Popular
          </button>
          <button className="btn btn-outline">
            <FaStar /> Following
          </button>
        </div>
      </div>

      {loading ? (
        <div className="loading">Loading matches...</div>
      ) : matches.length === 0 ? (
        <div className="no-matches">No matches scheduled for today</div>
      ) : (
        matches.map((match) => (
          <div key={match.fixture.id} className="match-card">
            <div className="match-header">
              <span>{match.league.name}</span>
              <div className="match-status">
                <div className={`status-indicator ${match.fixture.status.short === 'LIVE' ? 'live' : ''}`}></div>
                <span>{formatMatchTime(match)}</span>
              </div>
            </div>
            <div className="match-teams">
              <div className="team">
                <img 
                  src={match.teams.home.logo} 
                  alt={match.teams.home.name} 
                  className="team-logo"
                />
                <span>{match.teams.home.name}</span>
              </div>
              <div className="odds-container">
                <div 
                  className={`odd-box ${isOddSelected(match.fixture.id, '1') ? 'selected' : ''}`}
                  onClick={() => handleOddSelection(match.fixture.id, '1', matchOdds[match.fixture.id]['1'])}
                >
                  <div className="odd-label">1</div>
                  <div className="odd-value">{matchOdds[match.fixture.id]['1']}</div>
                </div>
                <div 
                  className={`odd-box ${isOddSelected(match.fixture.id, 'X') ? 'selected' : ''}`}
                  onClick={() => handleOddSelection(match.fixture.id, 'X', matchOdds[match.fixture.id]['X'])}
                >
                  <div className="odd-label">X</div>
                  <div className="odd-value">{matchOdds[match.fixture.id]['X']}</div>
                </div>
                <div 
                  className={`odd-box ${isOddSelected(match.fixture.id, '2') ? 'selected' : ''}`}
                  onClick={() => handleOddSelection(match.fixture.id, '2', matchOdds[match.fixture.id]['2'])}
                >
                  <div className="odd-label">2</div>
                  <div className="odd-value">{matchOdds[match.fixture.id]['2']}</div>
                </div>
              </div>
              <div className="team">
                <img 
                  src={match.teams.away.logo} 
                  alt={match.teams.away.name} 
                  className="team-logo"
                />
                <span>{match.teams.away.name}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MainContent;