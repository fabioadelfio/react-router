import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Posts () {
    const apiUrl = `https://lanciweb.github.io/demo/api/actresses/`;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get(apiUrl)
            .then(res => setPosts(res.data))
            .catch(err => console.error(`Errore nel caricamento dei dati!`));
    }, []);

    return (
        <div className="container">
            <h1>Lista dei Post</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>LINKS</th>
                    </tr>
                </thead>

                <tbody>
                    {posts.map(post => (
                        <tr>
                            <td>{post.id}</td>
                            <td>{post.name}</td>
                            <td>
                                <Link to={`/posts/${post.id}`} className="btn btn-primary">Show</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}