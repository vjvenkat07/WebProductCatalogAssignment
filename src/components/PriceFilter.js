import React, { useEffect, useState } from 'react';
import { Slider } from 'primereact/slider';
import { Button } from 'primereact/button';

function PriceFilter({ onChange, priceRange }) {
    const [range, setRange] = useState(priceRange);
    
    useEffect(() => {
        setRange(priceRange);
    }, [priceRange]);

    const handleApply = () => {
        onChange(range[0], range[1]);
    };

    return (
        <div className="p-3 border-round border-1 surface-border w-50">
            <div className="flex gap-3 p-3 border-round border-1 surface-border w-full">
                <h6 className='text-center'>Price: ${range[0]} - ${range[1]}</h6>
                <div className='d-flex gap-4'>
                    <div className='w-100 mt-3'>
                        <Slider
                            value={range}
                            onChange={(e) => setRange(e.value)}
                            range
                            min={0}
                            max={1000}
                            className="w-full mb-2"
                        />
                    </div>
                    <div className='text-center'>
                        <Button label="Apply" className='rounded p-2' onClick={handleApply} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceFilter;


