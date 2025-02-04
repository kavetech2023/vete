import React from 'react';
import { FaFire, FaStar, FaClock } from 'react-icons/fa';

function MainContent() {
  const popularEvents = [
    {
      id: 1,
      title: 'Champions League Final',
      time: 'Today, 20:00',
      viewers: '125K'
    },
    {
      id: 2,
      title: 'NBA Playoffs',
      time: 'Tomorrow, 19:30',
      viewers: '98K'
    },
    {
      id: 3,
      title: 'UFC 300',
      time: 'Saturday, 22:00',
      viewers: '78K'
    }
  ];

  const matches = [
    {
      id: 1,
      league: 'UEFA Champions League',
      status: 'live',
      time: '65:00',
      homeTeam: 'Manchester City',
      awayTeam: 'Real Madrid',
      odds: {
        home: { label: '1', value: 2.10 },
        draw: { label: 'X', value: 3.40 },
        away: { label: '2', value: 3.20 }
      }
    },
    {
      id: 2,
      league: 'NBA',
      status: 'upcoming',
      time: '19:30',
      homeTeam: 'Lakers',
      awayTeam: 'Warriors',
      odds: {
        home: { label: '1', value: 1.85 },
        away: { label: '2', value: 1.95 }
      }
    },
    {
      id: 3,
      league: 'Premier League',
      status: 'live',
      time: '32:00',
      homeTeam: 'Arsenal',
      awayTeam: 'Liverpool',
      odds: {
        home: { label: '1', value: 2.50 },
        draw: { label: 'X', value: 3.20 },
        away: { label: '2', value: 2.80 }
      }
    }
  ];

  return (
    <div className="main-content">
      <div className="section-header">
        <h2>Popular Events</h2>
        <button className="btn btn-outline">See All</button>
      </div>

      <div className="popular-events">
        {popularEvents.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-image"></div>
            <h3 className="event-title">{event.title}</h3>
            <div className="event-info">
              <FaClock /> {event.time} • {event.viewers} watching
            </div>
          </div>
        ))}
      </div>

      <div className="section-header">
        <h2>Live & Upcoming</h2>
        <div className="match-filters">
          <button className="btn btn-outline">
            <FaFire /> Popular
          </button>
          <button className="btn btn-outline">
            <FaStar /> Following
          </button>
        </div>
      </div>

      {matches.map((match) => (
        <div key={match.id} className="match-card">
          <div className="match-header">
            <span>{match.league}</span>
            <div className="match-status">
              <div className={`status-indicator ${match.status}`}></div>
              <span>{match.status === 'live' ? match.time : `Starting at ${match.time}`}</span>
            </div>
          </div>
          <div className="match-teams">
            <div className="team">
              <div className="team-logo"></div>
              <span>{match.homeTeam}</span>
            </div>
            <div className="odds-container">
              <div className="odd-box">
                <div className="odd-label">{match.odds.home.label}</div>
                <div className="odd-value">{match.odds.home.value}</div>
              </div>
              {match.odds.draw && (
                <div className="odd-box">
                  <div className="odd-label">{match.odds.draw.label}</div>
                  <div className="odd-value">{match.odds.draw.value}</div>
                </div>
              )}
              <div className="odd-box">
                <div className="odd-label">{match.odds.away.label}</div>
                <div className="odd-value">{match.odds.away.value}</div>
              </div>
            </div>
            <div className="team">
              <div className="team-logo"></div>
              <span>{match.awayTeam}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainContent;