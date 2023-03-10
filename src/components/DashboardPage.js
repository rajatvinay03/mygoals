import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './DashboardPage.module.css';
import activityImage from '../assets/activity.jpg';
import goalsImage from '../assets/goals.jpg';

const DashboardPage = () => {
  const history = useHistory();

  const handleLogout = () => {
    // handle logout logic here
    history.push('/');
  };

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Welcome to Your Dashboard</h1>
      <p className={styles.description}>Here you can view and manage your account information, <br/> track your fitness progress, and access personalized workout and nutrition plans.</p>
      <button className={styles.logout} onClick={handleLogout}>Logout</button>
      <div className={styles.dashboard_container}>
          <div className={styles.activity}>
            <img className={styles.image} src={activityImage} alt="Recent Activity" />
            <div>
              <h2 className={styles.subtitle}>Recent Activity</h2>
              <ul className={styles.list}>
                <li className={styles.item}>Completed 5k run</li>
                <li className={styles.item}>Logged 2-hour weightlifting session</li>
                <li className={styles.item}>Recorded daily food intake</li>
              </ul>
            </div>
          </div>
        <div className={styles.goals}>
          <div>
            <h2 className={styles.subtitles}>Goals</h2>
            <ul className={styles.list}>
              <li className={styles.item}>Run a half marathon in under 2 hours</li>
              <li className={styles.item}>Increase max bench press weight by 20 pounds</li>
              <li className={styles.item}>Reach body fat percentage of 15%</li>
            </ul>
          </div>
          <img className={styles.image} src={goalsImage} alt="Goals" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
