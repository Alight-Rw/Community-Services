import React from 'react';

const StatusCard = () => {
    const statusData = [
        { id: 1, title: "Available Services", icon: "/images/Available-services.png", trend: "/images/Trends.png", totalImg: "/images/Total.png", path: "/services/available" },
        { id: 2, title: "Requested Services", icon: "/images/Requested-services.png", trend: "/images/Trends1.png", totalImg: "/images/Total1.png", path: "/services/requested" },
        { id: 3, title: "Completed Services", icon: "/images/Completed-services.png", trend: "/images/Trends2.png", totalImg: "/images/Total2.png", path: "/services/completed" },
        { id: 4, title: "Rejected Services", icon: "/images/Rejected-services.png", trend: "/images/Trends3.png", totalImg: "/images/Total3.png", path: "/services/rejected" }
    ];

   const styles = {
        grid: {
            display: 'flex',
            // --- REDUCED FROM 5px TO 2px ---
            gap: '2px', 
            width: '100%',
            // --- REDUCED HORIZONTAL PADDING ---
            padding: '5px 2px', 
            boxSizing: 'border-box'
        },
        card: {
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            // --- TIGHTER PADDING TO FIT CLOSER CARDS ---
            padding: '10px 5px', 
            border: '1px solid #f0f0f0',
            borderRadius: '6px', // Slightly sharper corners look better when close
            textDecoration: 'none',
            backgroundColor: '#ffffff',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            position: 'relative', 
            minHeight: '110px',
        },
        
        trendImgStyle: {
            position: 'absolute',
            top: '12px',    
            right: '20%',  
            height: '14px',
            width: 'auto',
            transform: 'translateX(50%)' 
        },
        
        totalImgStyle: {
            position: 'absolute',
            top: '12px',    
            left: '20%',  
            height: '20px',
            width: 'auto',
            transform: 'translateX(-50%)'
        },
        iconImg: {
            width: '32px',
            height: '32px',
            objectFit: 'contain',
            marginTop: '15px', // Adds space so icon doesn't hit the absolute images
            marginBottom: '2px' 
        },
        title: {
            fontSize: '10px', // Slightly smaller font to prevent text wrapping
            fontWeight: '600',
            color: '#333',
            margin: '0',
            textAlign: 'center',
            whiteSpace: 'nowrap' // Keeps text on one line
        }
    };

    return (
        <div className="status-grid" style={styles.grid}>
            {statusData.map((item) => (
                <a key={item.id} href={item.path} style={styles.card}>
                    <img src={item.trend} alt="trend" style={styles.trendImgStyle} />
                    <img src={item.totalImg} alt="total" style={styles.totalImgStyle} />
                    <img src={item.icon} alt="icon" style={styles.iconImg} />
                    <h3 style={styles.title}>{item.title}</h3>
                </a>
            ))}
        </div>
    );
};

export default StatusCard;