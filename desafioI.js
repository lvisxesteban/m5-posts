
const getPosts = async () => {
	try {
		
		let response = await fetch('https://jsonplaceholder.typicode.com/posts');
		
		let data = await response.json();
		
		if (data !== null) {
			
			const postsInfo = data.map(i =>
				`
                <div>
                    <ul>
                        <li>
                            <span>${i.id}</span>
                            <span><b>${i.title}</b></span>
                            <span>${i.body}</span>
                        </li>
                    </ul>
                </div>
                `).join(''); 
			
			document.querySelector('#post-data').innerHTML = postsInfo; 
		}
	} catch (error) {
		
		console.log(error);
	}
};