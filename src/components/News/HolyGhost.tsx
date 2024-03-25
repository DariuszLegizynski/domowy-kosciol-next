import { useEffect, useState } from "react";
import IconItems from '@/components/IconItems'

const HolyGhost = ({count}) => {
  const [ scrollPosition, setScrollPosition ] = useState(85)

  useEffect(() => {
    const handleScroll = () => {

      const scrollTop = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;
      
      let diff = bodyHeight - (scrollTop + windowSize)

      let scrolled = (diff * 100) / (bodyHeight - windowSize)

      if(scrolled > 85) return setScrollPosition(85)
      if(scrolled < 5) return setScrollPosition(5)

      setScrollPosition(scrolled)
    }

    window.addEventListener("scroll", handleScroll)

    return () =>  window.removeEventListener('scroll', handleScroll)
  }, [])

	return (
		<section className="holy-ghost" style={{ transform: `translateY(${-scrollPosition}%)` }} >
			{[...Array(count)].map((x, id) => {
				return <IconItems type="wind" key={id} width="2rem" height="2rem" fillColor="black" animationType="dots" />;
			})}
			<IconItems type="holy-ghost" width="4rem" height="4rem" fillColor="black" />
		</section>
	);
};

export default HolyGhost;