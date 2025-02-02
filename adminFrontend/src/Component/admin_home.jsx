import { user } from "../img"
import { useState } from "react"
import React from 'react';
import styles from './admin_home.module.css';
import { useNavigate } from "react-router-dom";
const Admin_home = () => {
    const navigate=useNavigate()
    return (
    <div className={styles.main}>
        <nav className={styles.nav}>
            <p className="title">Spare Hub-Admin</p>
            <div>
                <input type="text" placeholder="Search by name or category" className="sb"/>
                
                        <img 
                            src={user} alt="User Profile" className="svg" 
                            onClick={() => navigate("/admin/admin_profile")}
                        /> 
            </div>
        </nav>
        <div className={styles.grid}>
                <div 
                    className={styles.card}
                    onClick={() => navigate("/admin/supplier")}
                >Supplier Details</div>

                <div 
                    className={styles.card}
                    onClick={() => navigate("/admin/user")}
                >User Details</div>

                <div 
                    className={styles.card}
                    onClick={() => navigate("/admin/order")}
                >Order Details</div>

                <div 
                    className={styles.card}
                    onClick={() => navigate("/admin/parts")}
                >Part Info</div>
        </div>
    </div>
)};

export default Admin_home;