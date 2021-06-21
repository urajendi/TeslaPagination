import React, { useState, useEffect } from 'react';
import Users from './components/Users';
import Pagination from './components/Pagination';
import axios from 'axios';

const USERS_JSON = 'https://api.jsonbin.io/b/60d0c1e38a4cd025b7a274d9';

export default function Table () {

    // State Variables
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);

    useEffect(()=>{
        const fetchUserData = async () => {
          setLoading(true);
          const res = await axios.get(USERS_JSON);
          setUserData(res.data);
          setLoading(false);
        }
        fetchUserData();
    }, []);

    console.log("userData");
    console.log(userData);

    // Get current users
    const lastUser = currentPage * usersPerPage;
    const firstUser = lastUser - usersPerPage;
    const currentUsers = userData.slice(firstUser, lastUser);

    // Get current page
    const totalUsers = userData.length;
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalUsers/usersPerPage); i++){
        pageNumbers.push(i);
    }

    // Set first and last page
    const firstPage = 1;
    const lastPage = pageNumbers[pageNumbers.length-1];

    // Paginate function
    const paginate = (pageNumber) => {
        if(pageNumber<firstPage){
            alert("Currently displaying page-1! No previous page found!!");
            setCurrentPage(firstPage);
        } else if(pageNumber>lastPage){
            alert("Currently displaying last page! No next page found!!")
            setCurrentPage(lastPage);
        } else {
            setCurrentPage(pageNumber);
        }
    };

    console.log("currentPage = "+currentPage);

    return (
        <div className = 'container mt-2'>
            <table className="table mt-2">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                </tr>
                </thead>
                <Users userData={currentUsers} loading={loading}></Users>
            </table>
            <Pagination     
                paginate = {paginate} 
                firstPage = {firstPage}
                lastPage = {lastPage}
                currentPageNumber = {currentPage}
            />
        </div>
    );
};
