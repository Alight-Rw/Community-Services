import React, { useState } from 'react';

const StatusCard = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const statusData = [
        { id: 1, title: "Available Services", icon: "/images/Available-services.png", trend: "/images/Trends.png", totalImg: "/images/Total.png", path: "/services/available" },
        { id: 2, title: "Requested Services", icon: "/images/Requested-services.png", trend: "/images/Trends1.png", totalImg: "/images/Total1.png", path: "/services/requested" },
        { id: 3, title: "Completed Services", icon: "/images/Completed-services.png", trend: "/images/Trends2.png", totalImg: "/images/Total2.png", path: "/services/completed" },
        { id: 4, title: "Rejected Services", icon: "/images/Rejected-services.png", trend: "/images/Trends3.png", totalImg: "/images/Total3.png", path: "/services/rejected" }
    ];

    const styles = {
        grid: {
            display: 'grid',
            
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '25px', 
            width: '100%',
            padding: '50px 25px 25px 25px', 
            boxSizing: 'border-box',
            backgroundColor: 'transparent' 
        },
        card: (isHovered) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end', 
            backgroundColor: '#fff',
            padding: '20px 15px',
            borderRadius: '12px',
            
            
            border: '3px solid',
            borderColor: isHovered ? 'var(--color-secondary)' : 'transparent', 
            
            
            outline: isHovered ? 'none' : '1px solid #7BB7FF',
            outlineOffset: '-5px',
            
            
            boxShadow: isHovered ? '0 10px 20px rgba(25, 97, 186, 0.2)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            
            position: 'relative',
            height: '210px', 
            transition: 'border-color 0.25s ease, box-shadow 0.25s ease, outline-color 0.25s ease',
            cursor: 'pointer',
            boxSizing: 'border-box',
            
        }),
        totalImgStyle: {
            position: 'absolute',
            top: '-25px',
            left: '-15px',
            width: '65px',
            height: 'auto',
            zIndex: '10'
        },
        trendImgStyle: {
            position: 'absolute',
            top: '15px',
            right: '15px',
            width: '45px',
            height: 'auto',
        },
        iconContainer: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
        },
        iconImg: {
            maxWidth: '85%',
            maxHeight: '100px',
            objectFit: 'contain'
        },
        titleLink: (isHovered) => ({
            fontSize: '18px', 
            fontWeight: '700',
            
            color: isHovered ? 'var(--color-secondary)' : '#334155', 
            margin: '10px 0 0 0',
            textAlign: 'center',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            fontFamily: 'sans-serif'
        })
    };

    return (
        <div style={styles.grid}>
            {statusData.map((item) => {
                const isHovered = hoveredId === item.id;
                
                return (
                    <div 
                        key={item.id} 
                        style={styles.card(isHovered)}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => window.location.href = item.path}
                    >
                        <img src={item.totalImg} alt="total" style={styles.totalImgStyle} />
                        <img src={item.trend} alt="trend" style={styles.trendImgStyle} />
                        
                        <div style={styles.iconContainer}>
                            <img src={item.icon} alt="icon" style={styles.iconImg} />
                        </div>
                        
                        <p style={styles.titleLink(isHovered)}>
                            {item.title}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default StatusCard;