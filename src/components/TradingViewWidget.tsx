
import { useEffect, useRef } from 'react';

interface TradingViewWidgetProps {
  symbol?: string;
  theme?: 'light' | 'dark';
  autosize?: boolean;
  height?: string;
  width?: string;
  interval?: string;
}

const TradingViewWidget = ({
  symbol = 'BINANCE:BTCUSDT',
  theme = 'dark',
  autosize = true,
  height = '100%',
  width = '100%',
  interval = 'D',
}: TradingViewWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Clean up any existing widget
    if (scriptRef.current) {
      scriptRef.current.remove();
      scriptRef.current = null;
    }

    if (!containerRef.current) return;

    const widgetContainer = containerRef.current.querySelector('.tradingview-widget-container__widget');
    if (widgetContainer) {
      // Clear existing content
      widgetContainer.innerHTML = '';
    }

    // Create and inject the script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize,
      symbol,
      interval,
      timezone: 'Etc/UTC',
      theme,
      style: '1',
      locale: 'en',
      backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 1)' : 'rgba(19, 23, 34, 1)',
      allow_symbol_change: true,
      support_host: 'https://www.tradingview.com'
    });

    // Save reference to the script for cleanup
    scriptRef.current = script;
    
    // Add the script to the container
    containerRef.current.querySelector('.tradingview-widget-container__widget')?.appendChild(script);

    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
      }
    };
  }, [symbol, theme, autosize, interval]);

  return (
    <div 
      ref={containerRef} 
      className="tradingview-widget-container" 
      style={{ height, width }}
    >
      <div 
        className="tradingview-widget-container__widget" 
        style={{ 
          height: 'calc(100% - 32px)', 
          width: '100%'
        }}
      ></div>
      <div className="tradingview-widget-copyright">
        <a 
          href="https://www.tradingview.com/" 
          rel="noopener nofollow" 
          target="_blank"
        >
          <span className="text-primary">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
