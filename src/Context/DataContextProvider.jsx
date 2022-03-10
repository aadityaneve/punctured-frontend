import React, { useState, useEffect } from 'react';
import puncture_data from '../assets/puncture_data.json';

const DataContext = React.createContext();

const DataContextProvider = ({ children }) => {
    const [punctureData, setPunctureData] = useState(puncture_data);
    console.log('punctureData:', punctureData);
    const [toFilter, setToFilter] = useState('');
    console.log('toFilter:', toFilter);

    function filterIt(string) {
        if (string === '') {
            setPunctureData(puncture_data);
        } else if (
            string == 'Delhi' ||
            string == 'Mumbai' ||
            string == 'Pune' ||
            string == 'Bangalore' ||
            string == 'Hyderabad'
        ) {
            setPunctureData(
                puncture_data.filter((element) =>
                    element.location.toLowerCase() == toFilter.toLowerCase()
                        ? element
                        : null
                )
            );
        } else if (
            string == 'Above 1 ⭐' ||
            string == 'Above 2 ⭐' ||
            string == 'Above 3 ⭐' ||
            string == 'Above 4 ⭐' ||
            string == 'Above 5 ⭐'
        ) {
            setPunctureData(
                puncture_data.filter((element) =>
                    Number(element.rating) >= Number(toFilter.split(' ')[1])
                        ? element
                        : null
                )
            );
        } else if (
            string == 'Above 10%' ||
            string == 'Above 20%' ||
            string == 'Above 33%' ||
            string == 'Above 40%' ||
            string == 'Above 50%'
        ) {
            setPunctureData(
                puncture_data.filter((element) => {
                    let string = toFilter.split(' ')[1];
                    string = string.split('');
                    delete string[string.length - 1];
                    string = string.join('');
                    return Number(element.discount) >= Number(string)
                        ? element
                        : null;
                })
            );
        } else if (string == 'Yes' || string == 'No') {
            setPunctureData(
                puncture_data.filter((element) => {
                    return element.online_payment == string ? element : null;
                })
            );
        }
    }

    useEffect(() => {
        filterIt(toFilter);
    }, [toFilter]);

    const value = { punctureData, toFilter, setToFilter };
    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};

export { DataContextProvider, DataContext };
