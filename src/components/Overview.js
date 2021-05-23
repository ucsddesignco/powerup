import "../App.css";

function Overview() {
    return (
        <div className="overview">
            <div className="overview-cols">
                <div className="overview-full">
                    <p className="overview-header-text">Overview</p>
                
                    <div className="overview-container">
                    
                        <div className="overview-item">
                            <div className="overview-arrow"/>
                            <p className="overview-text">June 28 - September 3, 2021</p>
                        </div>
                        <div className="overview-item">
                            <div className="overview-arrow"/>
                            <p className="overview-text">12-15 hr commitment per week</p>
                        </div>
                        <div className="overview-item">
                            <div className="overview-arrow"/>
                            <p className="overview-text">Network with industry professionals</p>
                        </div>
                        <div className="overview-item">
                            <div className="overview-arrow"/>
                            <p className="overview-text">Help small businesses</p>
                        </div>
                    </div>
                </div>
                
                <div className="overview-blob"></div>
                
            
            </div>

        </div>
  );
}

export default Overview;
