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
            gap: '5px',
            width: '100%',
            padding: '5px',
            boxSizing: 'border-box'
        },
        card: {
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px', 
            border: '1px solid #f0f0f0',
            borderRadius: '10px',
            textDecoration: 'none',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
            position: 'relative', 
            minHeight: '100px',
        },
        
        trendImgStyle: {
            position: 'absolute',
            top: '15px',    
            right: '25%',  
            height: '16px',
            width: 'auto',
            transform: 'translateX(-50%)' 
        },
        
        totalImgStyle: {
            position: 'absolute',
            top: '15px',    
            left: '25%',  
            height: '22px',
            width: 'auto',
            transform: 'translateX(50%)'
        },
        iconImg: {
            width: '35px',
            height: '35px',
            objectFit: 'contain',
            marginBottom: '2px' 
        },
        title: {
            fontSize: '11px',
            fontWeight: '600',
            color: '#333',
            margin: '0',
            textAlign: 'center'
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