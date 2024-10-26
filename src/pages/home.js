import React from 'react';

const Home = () => {
    return (
        <div>
            <header>
                <h1>Twitter</h1>
            </header>
            <main>
                <section>
                    <h2>What's happening</h2>
                    <form>
                        <textarea placeholder="What's happening?" rows="3"></textarea>
                        <button type="submit">Tweet</button>
                    </form>
                </section>
                <section>
                    <h2>Latest Tweets</h2>
                    <ul>
                        <li>
                            <strong>@user1</strong>: This is a tweet!
                        </li>
                        <li>
                            <strong>@user2</strong>: Another tweet here!
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default Home;