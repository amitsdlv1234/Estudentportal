import React from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom'

export const GetTable = () => {
    const queryClient = useQueryClient();
    const move = useNavigate()
    const { data, error, isLoading } = useQuery({
        queryKey: ["Array"],
        queryFn: async () => {
            try {
                const response = await axios.get(
                    "https://6538d7e9a543859d1bb208d2.mockapi.io/ereport"
                );
                return response.data;
            } catch (error) {
                console.error("Error fetching data:", error);
                throw error;
            }
        },
    });

    const deleteData = async (id) => {
        try {
            await axios.delete(`https://6538d7e9a543859d1bb208d2.mockapi.io/ereport/${id}`);
            queryClient.invalidateQueries(["Array"]);
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    const ShowData = (id) => {
        axios.get(`https://6538d7e9a543859d1bb208d2.mockapi.io/ereport/${id}`).then(() => {
            move(`/ProfileData/${id}`)
        })
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    return (
        <div>
            <h1>GetTable</h1>
            <table className="f_detail">
                <thead className="f_head">
                    <tr>
                        <th className="f_th">ID</th>
                        <th className="f_th">Roll No.</th>
                        <th className="f_th">Name</th>
                        <th className="f_th">F.Name</th>
                        <th className="f_th">Phone No.</th>
                        <th className="f_th">Branch</th>
                        <th className="f_th">Photo</th>
                        <th className="f_th">View/Edit</th>
                    </tr>
                </thead>
                <tbody className="f_body">
                    {data.map((value, key) => (
                        <tr key={key}>
                            <td className="f_td"> {value.id} </td>
                            <td className="f_td">{value.rollno}</td>
                            <td className="f_td">{value.StudentName}</td>
                            <td className="f_td">{value.fname}</td>
                            <td className="f_td">{value.mobno}</td>
                            <td className="f_td"> {value.branchn} </td>
                            <td className="f_td"> {value.photo}</td>
                            <td className="f_td">
                                <button onClick={() => deleteData(value.id)}>Delete</button>
                                <button >Edit</button>
                                <button onClick={() => ShowData(value.id)}>Show</button>

                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
