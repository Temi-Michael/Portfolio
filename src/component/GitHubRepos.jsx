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
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(8);
  const [isLastPage, setIsLastPage] = useState(false);
  const [totalRepos, setTotalRepos] = useState(0);

  // Fetch the total number of repositories
  useEffect(() => {
    const fetchTotalRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: `token ${tokenid}`
          }
        });
        setTotalRepos(response.data.public_repos);
      } catch (error) {
        console.error("Failed to fetch total repositories", error);
      }
    };

    fetchTotalRepos();
  }, [username, tokenid]);

  // Fetch repositories and README files
  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      setReadmeData({}); // Clear previous README data
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
          headers: {
            Authorization: `token ${tokenid}`
          },
          params: {
            page: page,
            per_page: perPage
          }
        });
        setRepos(response.data);

        // Check if it's the last page
        setIsLastPage(response.data.length < perPage);

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
  }, [username, tokenid, page, perPage]);

  // Truncate text to a specific number of words
  const truncateText = (text, maxLength) => {
    const words = text.split(' ');
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(' ');
    }
    return text;
  };

  // Handle going to the next page
  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  // Handle going to the previous page
  const handlePreviousPage = () => {
    setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(totalRepos / perPage);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className='projectback'>
      <div className='projectcontainer' id='project'>
        <h2 className="projectheader">{username}'s Repositories</h2>

        <div className='pagination-controls'>
          <label htmlFor="perPage">Repos per page:</label>
          <select
            id="perPage"
            value={perPage}
            onChange={(e) => setPerPage(parseInt(e.target.value))}
          >
            <option value={8}>8</option>
            <option value={10}>10</option>
            <option value={16}>16</option>
            <option value={20}>20</option>
          </select>
        </div>

        <ul>
          <div className='projectframe'>
            {loading ? (
              Array(6).fill().map((_, index) => (
                <div className='skeleton' key={index}>
                  <li>
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
                      <a href={repo.html_url} target='_blank' rel='noopener noreferrer' className='links'>{repo.name}</a>
                    </div>
                  </div>
                </li>
              ))
            )}
          </div>
        </ul>

        <div className='pagination'>
          <button onClick={() => setPage(1)} disabled={page === 1} id='pagination-button'>
            First Page
          </button>
          <button onClick={handlePreviousPage} disabled={page === 1} id='pagination-button'>
            Previous
          </button>
          <span>Page {page} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={isLastPage} id='pagination-button'>
            Next
          </button>
          <button onClick={() => setPage(totalPages)} disabled={page === totalPages || totalPages === 0} id='pagination-button'>
            Last Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default GitHubRepos;
