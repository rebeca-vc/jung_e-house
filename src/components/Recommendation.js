const Recommendation = () => {
    const month = new Date().getMonth();
    const isSpring = month >= 9 && month <= 12;

    if (isSpring){
        return <div>It's Spring, time to repot!!</div>
    }
    return <div>Let's take care of our plants! </div>
}

export default Recommendation;