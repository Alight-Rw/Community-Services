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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '7px',
            width: '100%',
            padding: '5px 2px',
            boxSizing: 'border-box'
        },
        card: (isHovered) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '300px',
            padding: '10px 5px',
            
            border: isHovered ? '4px solid #7BB7FF' : '1px solid #7BB7FF',
            borderRadius: '6px',
            backgroundColor: '#fff',
            boxShadow: isHovered ? '0 4px 8px rgba(40, 167, 69, 0.2)' : '0 1px 3px rgba(0,0,0,0.04)',
            position: 'relative',
            minHeight: '110px',
            transition: 'all 0.3s ease', 
            cursor: 'pointer'
        }),
        
        imageHover: (isHovered) => ({
            filter: isHovered 
                ? 'sepia(100%) hue-rotate(90deg) saturate(300%)' 
                : 'none',
            transition: 'filter 0.3s ease'
        }),
        trendImgStyle: {
            position: 'absolute',
            top: '30px',
            right: '15%',
            height: '29px',
            width: '50px',
            transform: 'translateX(50%)'
        },
        totalImgStyle: {
            position: 'absolute',
            top: '0px',
            left: '11%',
            height: '59px',
            width: '64px',
            transform: 'translateX(-50%)'
        },
        iconImg: {
            width: '178px',
            height: '135px',
            objectFit: 'contain',
            marginTop: '20px',
            marginBottom: '2px'
        },
        titleLink: (isHovered) => ({
            fontSize: '20px',
            fontWeight: '600',
            // 
            color: isHovered ? 'blue' : 'black',
            margin: '0',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            textDecoration: 'none',
            transition: 'color 0.3s ease'
        })
    };

    return (
        <div className="status-grid" style={styles.grid}>
            {statusData.map((item) => {
                const isHovered = hoveredId === item.id;
                
                return (
                    <div 
                        key={item.id} 
                        style={styles.card(isHovered)}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        
                        <img src={item.trend} alt="trend" style={{...styles.trendImgStyle, ...styles.imageHover(isHovered)}} />
                        <img src={item.totalImg} alt="total" style={{...styles.totalImgStyle, ...styles.imageHover(isHovered)}} />
                        <img src={item.icon} alt="icon" style={{...styles.iconImg, ...styles.imageHover(isHovered)}} />
                        
                        <a href={item.path} style={styles.titleLink(isHovered)}>
                            {item.title}
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default StatusCard;