import { useContext, useEffect, useState } from 'react';
import heartIcon from '../../assets/heart.svg'
import RedHeartIcon from "../../assets/heart-red.svg"
import { FavouriteContext, WeatherContext } from '../../context';

const AddToFavourite = () => {
	const {addToFavourite, removeFromFavourites, favourites}=useContext(FavouriteContext)

	const { weatherData } = useContext(WeatherContext);

	const {latitude, longitude,location} = weatherData

	const [isFavourite, toggleFavourite] = useState(false);
	
	useEffect(() => {
        const found = favourites.find((fav) => fav.location === location);
        toggleFavourite(found);
    }, []);

	const handleFavourite=()=>{
		const found= favourites.find((fav=>fav.location==location))	
		if(!found){
			addToFavourite(latitude, longitude, location);
		}else{
			removeFromFavourites(location)
		}
		toggleFavourite(!isFavourite)
	}

    return (
        <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
								<button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]" onClick={handleFavourite}>
									<span>Add to Favourite</span>
									<img src={isFavourite?RedHeartIcon:heartIcon} alt="heart" />
								</button>
								</div>
							</div>
    );
};

export default AddToFavourite;