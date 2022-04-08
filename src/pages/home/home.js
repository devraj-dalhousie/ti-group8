import React, {useEffect, useState} from 'react';
import UserNavbar from '../../components/navBar/UserNavBar';
import './home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {CanvasJSChart} from 'canvasjs-react-charts'
import ReactApexChart from 'react-apexcharts';


function Home () {
    const error = '';
    let fitnessData = {};
    let dietData = {};
    let fitnessLabel = []
    const baseURL = "http://localhost:8080"
    var React = require('react');
    let caloriePieData = {
          
        series: [25,25,25,25],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      };
    const [loadPie, setLoadPie]= useState(false);

    useEffect(() => {
        validateUser();
        getFitnessData();
        getDietData();
        },[]);
    
    const getFitnessData = () =>{
        axios.get(baseURL + "/getFitnessData", { params: { age: 42 } })
        .then(result => {
            fitnessData = result.data;
            setFitnessData();
            caloriePieData.options.labels = fitnessLabel;
            setLoadPie(true);
          }
          ).then(err=> console.log(err))
      
    }

    const getDietData = () =>{
        axios.get(baseURL + "/getDietData", { params: { age: 42 } })
        .then(result => {
            dietData = result.data;
            setDietData();
          }
          ).then(err=> console.log(err))
      
    }


    const setFitnessData = () => {
        const day = document.getElementById('fitness-day').value;
        document.getElementById('restDays').innerHTML = "";
        let fitenessTableHTML = '';
            for(const data of fitnessData[day]){
                fitenessTableHTML = fitenessTableHTML + '<tr><td>'+data[0]+'</td><td>'+data[1]+
                '</td><td>'+data[2]+'</td><td>'+data[3]+'</td></tr>';
                fitnessLabel.push(String(data[0]));
            }
        document.getElementById('fitnessData').innerHTML = fitenessTableHTML;
    }

    const setDietData = () =>{
        const day = document.getElementById('fitness-day').value;
        let dietTableHTML = '';
        dietTableHTML = dietTableHTML + '<tr><td>'+dietData[day][0]+'</td><td>'+dietData[day][1]+
                '</td><td>'+dietData[day][2]+'</td><td>'+dietData[day][3]+'</td><td>'+dietData[day][4]+'</td></tr>';
        document.getElementById('dietData').innerHTML = dietTableHTML;
    }

    const validateUser = () =>  {
        console.log('inside validate');
        const isBasicValidationPassed = doBasicValidation();
        if (isBasicValidationPassed === false) {
            window.location.href = window.location.origin + "/profile?user=" + localStorage.getItem('email');
            return;
        }
    }
    
    const doBasicValidation = () =>  {
        const user =localStorage.getItem('email');
        const userData = localStorage.getItem(user+'-data')
        console.log(user)
        if(userData === null){
            return false;
        }
        return true;
    }

    const setAllData = () =>{
        getFitnessData();
        getDietData();
    }

    const checkNotEmpty = (value) => {
        return value.trim() !== "";
    }

    return(
            <div>
            <UserNavbar />
            <div className={"home-page"} id='homePage' name={localStorage.getItem('email')}>
            <div style={{paddingTop:'120px'}}>
               <h2 style={{textAlign:'center'}}>Your Fitness Plan:</h2><br />
               <select name="day" id="fitness-day" onChange={setAllData}>
                    <option value="Monday" >Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sudnday</option>
                </select>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th style={{fontSize:'15pt'}}>Exercise</th>
                        <th style={{fontSize:'15pt'}}>Repititions</th>
                        <th style={{fontSize:'15pt'}}>Sets</th>
                        <th style={{fontSize:'15pt'}}>Gap between Sets (min)</th>
                        </tr>
                    </thead>
                    <tbody id='fitnessData'>
                    </tbody>
                </table>
                <h2 style={{textAlign:'center'}}><p id='restDays'></p></h2>

                <h2 style={{textAlign:'center'}}>Your Diet Plan:</h2>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th style={{fontSize:'15pt'}}>Breakfast</th>
                        <th style={{fontSize:'15pt'}}>Lunch</th>
                        <th style={{fontSize:'15pt'}}>Dinner</th>
                        <th style={{fontSize:'15pt'}}>Snacks 1</th>
                        <th style={{fontSize:'15pt'}}>Snacks 2</th>
                        </tr>
                    </thead>
                    <tbody id='dietData'>
                    </tbody>
                </table>
               </div>
            </div>
            </div>
        );
    
}
export default Home;