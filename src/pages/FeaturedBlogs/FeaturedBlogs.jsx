import DataTable from 'react-data-table-component';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const FeaturedBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const sortedDates = allBlogs?.sort((a, b) => a.LongDescription.split(' ').length < b.LongDescription.split(' ').length);
    const topTenBlogs = sortedDates?.slice(0, 10);
    console.log(topTenBlogs);
    useEffect(() => {
        axios.get('http://localhost:3000/allBlogs')
            .then(res => {
                setAllBlogs(res.data)
            })
    }, [])



    const columons = [
        {
            name: <h1 className=' text-sm font-bold text-[tomato]'>Serial No:</h1>,
            selector: (row, index) => <p className=' font-bold text-xs flex justify-center items-center'>{index + 1}</p>,
            width: "120px",
        },
        {
            name: <h1 className=' text-xl font-bold text-[tomato]'>Title</h1>,
            selector: row => <h1 className='text-xl text-[orange] '>{row.title}</h1>,
        },
        {
            name: <h1 className=' text-xl font-bold text-[tomato]'>Owner Photo</h1>,
            selector: row => <div >
                <div className={row?.writerPhoto && 'avatar'}>
                    <div className="w-24 mask mask-squircle">
                        <img src={row?.writerPhoto ? row?.writerPhoto : 'nill'} />
                    </div>
                </div>
            </div>,
        },
        {
            name: <h1 className=' text-xl font-bold text-[tomato]'>Blog Owner</h1>,
            selector: row => <p className='text-xl text-[orange] '>{row.writer}</p>,
        },
    ]



    return (
        <DataTable className=' container mx-auto'
            columns={columons}
            data={topTenBlogs}
        >
        </DataTable>
    );
};

export default FeaturedBlogs;