import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import atob from 'atob';

const GitHubRepos = () => {
  const username = 'temi-michael';
  const tokenid = process.env.REACT_APP_API_KEY;
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [readmeData, setReadmeData] = useState({});

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
          headers: {
            Authorization: `token ${tokenid}`
          }
        });
        setRepos(response.data);

        // Fetch README for each repository
        response.data.forEach(async (repo) => {
          try {
            const readmeResponse = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/readme`, {
              headers: {
                Authorization: `token ${tokenid}`
              }
            });
            const readmeContent = atob(readmeResponse.data.content);
            const truncatedReadme = truncateText(readmeContent, 100); // Truncate to 100 words
            setReadmeData(prevState => ({
              ...prevState,
              [repo.name]: truncatedReadme
            }));
          } catch (error) {
            console.error(`Failed to fetch README for ${repo.name}`, error);
          }
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, tokenid]);

  const truncateText = (text, maxLength) => {
    const words = text.split(' ');
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(' ') + '...';
    }
    return text;
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div className='projectback'>
      <div className='projectcontainer' id='project'>
        <h2 className="projectheader">{username}'s Repositories</h2>
        <ul>
          <div className='projectframe'>
              {loading ? (
                Array(6).fill().map((_, index) => (
                  <div className='skeleton'>
                    <li key={index}>
                      <Skeleton width={200} height={20} />
                      <Skeleton width={200} height={100} />
                    </li>
                  </div>
                ))
              ) : (
                repos.map(repo => (
                    <li key={repo.id}>
                      <div className='card'>
                        <h4 className='projectheading'>
                          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                          </a>
                        </h4>
                        <p className='projecttext'>{readmeData[repo.name]}<b>....</b></p>
                        <div className='projectlinks'>
                          <a href={repo.html_url} target='_blank' rel='noopener noreferrer' className='links'>{ repo.name }</a>
                        </div>
                      </div>
                    </li>
                ))
              )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default GitHubRepos;
