import React, { useState } from 'react';
import { 
  FaFutbol, 
  FaBasketballBall, 
  FaHockeyPuck, 
  FaBaseballBall,
  FaTableTennis,
  FaVolleyballBall,
  FaFootballBall,
  FaGolfBall,
  FaStar,
  FaFire,
  FaClock,
  FaTrophy
} from 'react-icons/fa';

function Sidebar() {
  const [activeSport, setActiveSport] = useState('Soccer');
  const [activeLeague, setActiveLeague] = useState('Premier League');

  const sports = [
    { name: 'Soccer', icon: <FaFutbol />, count: 156 },
    { name: 'Basketball', icon: <FaBasketballBall />, count: 48 },
    { name: 'Hockey', icon: <FaHockeyPuck />, count: 24 },
    { name: 'Baseball', icon: <FaBaseballBall />, count: 36 },
    { name: 'Table Tennis', icon: <FaTableTennis />, count: 12 },
    { name: 'Volleyball', icon: <FaVolleyballBall />, count: 18 },
    { name: 'American Football', icon: <FaFootballBall />, count: 8 },
    { name: 'Golf', icon: <FaGolfBall />, count: 4 },
  ];

  const quickLinks = [
    { name: 'Live Events', icon: <FaFire />, count: 42 },
    { name: 'Starting Soon', icon: <FaClock />, count: 23 },
    { name: 'Following', icon: <FaStar />, count: 12 },
  ];

  const featuredLeagues = [
    { name: 'Premier League', count: 10 },
    { name: 'Champions League', count: 8 },
    { name: 'La Liga', count: 6 },
    { name: 'NBA', count: 12 },
    { name: 'NHL', count: 8 },
  ];

  const tournaments = [
    { name: 'World Cup 2026 Qualifiers', icon: <FaTrophy />, count: 15 },
    { name: 'Euro 2024', icon: <FaTrophy />, count: 12 },
    { name: 'Copa America 2024', icon: <FaTrophy />, count: 8 },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h2>Quick Links</h2>
        <div className="sports-list">
          {quickLinks.map((link) => (
            <div 
              key={link.name} 
              className="sport-item"
            >
              {link.icon}
              <span>{link.name}</span>
              <span style={{ marginLeft: 'auto' }}>{link.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h2>Sports</h2>
        <div className="sports-list">
          {sports.map((sport) => (
            <div 
              key={sport.name} 
              className={`sport-item ${sport.name === activeSport ? 'active' : ''}`}
              onClick={() => setActiveSport(sport.name)}
            >
              {sport.icon}
              <span>{sport.name}</span>
              <span style={{ marginLeft: 'auto' }}>{sport.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h2>Featured Leagues</h2>
        <div className="sports-list">
          {featuredLeagues.map((league) => (
            <div 
              key={league.name}
              className={`league-item ${league.name === activeLeague ? 'active' : ''}`}
              onClick={() => setActiveLeague(league.name)}
            >
              <span>{league.name}</span>
              <span style={{ marginLeft: 'auto' }}>{league.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h2>Major Tournaments</h2>
        <div className="sports-list">
          {tournaments.map((tournament) => (
            <div 
              key={tournament.name} 
              className="sport-item"
            >
              {tournament.icon}
              <span>{tournament.name}</span>
              <span style={{ marginLeft: 'auto' }}>{tournament.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;