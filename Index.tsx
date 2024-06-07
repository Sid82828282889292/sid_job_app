"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './Index.module.css';

interface IndexProps {
  //Index ke props
}

const Index: React.FC<IndexProps> = () => {
  const [bidPrice, setBidPrice] = useState('');
  const [estimatedDuration, setEstimatedDuration] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [shareProfile, setShareProfile] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleBidPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBidPrice(event.target.value);
  };

  const handleEstimatedDurationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEstimatedDuration(event.target.value);
  };

  const handlePortfolioLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPortfolioLink(event.target.value);
  };

  const handleShareProfileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShareProfile(event.target.value === 'yes');
  };

  const handleAgreeToTermsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAgreeToTerms(event.target.checked);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //Submission ke parameters
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="fir.png" alt="Logo" className={styles.logoImage} />
        <div className={styles.title}>
          Apply to join Google Team as
          <div className={styles.subtitle}>Angular JS Developer</div>
        </div>
        <div className={styles.time}>Posted 3h ago</div>
      </div>

      <div className={styles.horizontalLine}></div>
      
      <div className={styles.content}>
        <form className={styles.left} onSubmit={handleSubmit}>
          <div className={styles.question}>How are you fit for this job?</div>
          <textarea
            className={styles.textarea}
            placeholder="Enter text"
          />
          
          <div className={styles.flexContainer}>
            <div className={styles.inputContainer}>
              <div className={styles.label}>
                Bid Price
              </div>
              <div className={styles.input}>
                <span className={styles.currency}>$</span>
                <input
                  type="text"
                  className={styles.inputField}
                  value={bidPrice}
                  onChange={handleBidPriceChange}
                  placeholder="Enter Amount"
                />
              </div>
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.label}>
                Estimated duration of work
              </div>
              <div className={styles.input}>
                <span className={styles.icon}>🗓️</span>
                <input
                  type="text"
                  className={styles.inputField}
                  value={estimatedDuration}
                  onChange={handleEstimatedDurationChange}
                  placeholder="Enter the number of months"
                />
              </div>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.label}>
              Upload a link to your Portfolio / Github
            </div>
            <div className={styles.input}>
              <span className={styles.icon}>🔗</span>
              <input
                type="text"
                className={styles.inputField}
                value={portfolioLink}
                onChange={handlePortfolioLinkChange}
                placeholder="Place the url"
              />
            </div>
          </div>
          <div className={styles.question}>
            Allow Xlancr to share your Profile to "XYZ Company"?
          </div>
          <div className={styles.options}>
            <label className={styles.option}>
              <input
                type="radio"
                name="share"
                value="yes"
                checked={shareProfile}
                onChange={handleShareProfileChange}
              />
              <span className={styles.optionText}>Yes</span>
            </label>
            <label className={styles.option}>
              <input
                type="radio"
                name="share"
                value="no"
                checked={!shareProfile}
                onChange={handleShareProfileChange}
              />
              <span className={styles.optionText}>No</span>
            </label>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={handleAgreeToTermsChange}
            />
            <span className={styles.checkboxText}>
              All the details provided are correct and I am liable for any false
              information.
            </span>
          </div>
          <div className={styles.submitButtonContainer}>
            <button className={styles.button} type="submit">
              Submit Application
            </button>
          </div>
        </form>

        <div className={styles.verticalLine}></div>
        
        <div className={styles.right}>
            <div className={styles.price}>
              <span className={styles.amount}>$ 340 </span>
              <span className={styles.currency}> USD</span>
              <div className={styles.description}>
                On completion of entire project
              </div>
            </div>
            <div className={styles.info}>
              <div>Fixed Price</div>
              <div className={styles.value}>Less than 3 months</div>
            </div>
            <div className={styles.info}>
              <div className={styles.label}>Client Info</div>
              <div className={styles.value}>
                <span className={styles.icon}>⭐</span>
                4.3/5.0
              </div>
              <div className={styles.value}>
                <span className={styles.icon}>👤</span>
                Verified Account
              </div>
              <div className={styles.value}>
                <span className={styles.icon}>👨‍💼</span>
                Member since 2024
              </div>
            </div>
        </div>
      </div>      
    </div>
  );
};

export default Index;
