import React from 'react';
import './lastcrd.css'

const LastCard = () => {
    return (
        <div>
            <h1 className='text-center text-5xl text-blue-300'> Register Events As You Like </h1>
            <p className='text-center my-6'> Whether you're a beginner or a pro, there's a marathon for you</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'>
                <div class="card-contentMachine mx-auto mb-20 ">
  <div class="content-writer">
    <img src="https://media.istockphoto.com/id/640935096/photo/happy-winners.jpg?s=612x612&w=0&k=20&c=NLaD5WJ8yP4gp7AOhewA0v5L2qlvnbtD0WZdQt0JUXI=" alt="" />
    <p class="para">
     <p>Join a community of runners, set your goals, and experience the thrill of endurance, achievement, and celebration in every marathon.</p>
    </p>
  </div>
</div>

 <div class="card-contentMachine mx-auto mb-20 ">
  <div class="content-writer content-worker">
    <img src="https://media.istockphoto.com/id/675579720/photo/group-of-athletes-greeting-the-winner-at-the-finsh-line.jpg?s=612x612&w=0&k=20&c=C3ANXqx11vC2dk82pkV0vhw-z1VEjE__lE4tVJ0YvI8=" alt="" />
    <p class="para">
     <p>Train hard, stay motivated, and conquer the distance — every step brings you closer to the finish line.</p>
    </p>
  </div>
</div>

 <div class="card-contentMachine mx-auto mb-20">
  <div class="content-winner content-writer">
    <img src="https://media.istockphoto.com/id/1095845222/photo/cheerful-marathon-runner-greeting-group-of-athletes-at-finish-line.jpg?s=612x612&w=0&k=20&c=ueh-rONi8GVoXewwchPFCmmXy5Rf8xqMvICf3g-UfxY=" alt="" />
    <p class="para">
     <p>From beginners to pros, our marathon events offer the perfect blend of challenge, community, and celebration.</p>
    </p>
  </div>
</div>
            </div>
        </div>
    );
};

export default LastCard;