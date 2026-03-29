import React from 'react';
import { ExternalLink } from 'lucide-react';

interface EventItemProps {
    ev: any;
}

export const EventItem: React.FC<EventItemProps> = ({ ev }) => {
    return (
        <div className="event-item">
            <div className="event-header">
                <span className="event-type">{ev.type.toUpperCase()}</span>
                <span className="event-time">{ev.receivedAt}</span>
            </div>
            <div className="event-body">
                From: {ev.from ? `${ev.from.slice(0, 8)}...${ev.from.slice(-8)}` : 'N/A'}<br />
                To: {ev.to ? `${ev.to.slice(0, 8)}...${ev.to.slice(-8)}` : 'N/A'}<br />
                {ev.asset_type === 'native' ? 'Asset: XLM' : `Asset: ${ev.asset_code || 'Unknown'}`}
            </div>
            <a
                href={`https://stellar.expert/explorer/testnet/tx/${ev.transaction_hash}`}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--primary)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none', marginTop: '0.5rem' }}
            >
                View Transaction <ExternalLink size={12} />
            </a>
        </div>
    );
};
