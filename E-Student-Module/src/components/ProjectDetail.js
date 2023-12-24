import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import './styles/profile_each.css'
const MemberDetails = ({ member }) => (
    <tr>
        <td>{member.name}</td>
        <td>{member.rollno}</td>
        <td>{member.branch}</td>
    </tr>
);

const ProjectForm = () => {
    const { userroll } = useParams();
    const [prodata, setProdata] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://6561c704dcd355c083242eab.mockapi.io/project");
                setProdata(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filterdata = prodata.filter((item) =>
        item.members.some((member) => String(member.rollno) === userroll)
    );

    return (
        <>
            <Nav />
            <div className='freespace'></div>
            {loading && <p>Loading...</p>}
            {!loading && filterdata.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Project Detail</th>
                            <th>Member's Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterdata.map((item, key) => (
                            <tr key={key}>
                                <td>{item.project.proname}</td>
                                <td>{item.project.prodetail}</td>
                                <td>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Roll No</th>
                                                <th>Branch</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {item.members.map((member, index) => (
                                                <MemberDetails key={index} member={member} />
                                            ))}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>{!loading && <p>No projects found for the user.</p>}</div>
            )}
        </>
    );
};

export default ProjectForm;
