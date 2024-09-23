import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">DevOps & CloudOps</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">GCP/AWS</h3>
                            <span className="skills__level"></span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Proxy & IAP</h3>
                            <span className="skills__level">tiny proxy & GCP IAP</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Monitoring</h3>
                            <span className="skills__level">Prometheus & Grafana</span>
                        </div>
                    </div>

                    
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Docker</h3>
                            <span className="skills__level"></span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">CI/CD</h3>
                            <span className="skills__level"></span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Terraform</h3>
                            <span className="skills__level">IAC</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Python & Bash</h3>
                            <span className="skills__level">Scripting</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Helm</h3>
                            <span className="skills__level"></span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Kubernetes</h3>
                            <span className="skills__level">GKE/EKS</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Logging</h3>
                            <span className="skills__level">Loki & Grafana</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Postgres & MongDB</h3>
                            <span className="skills__level"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frontend;