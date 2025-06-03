import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(``);

    useEffect(() => {
        axios
            .get(`https://lanciweb.github.io/demo/api/actresses/`)
            .then(res => {
                const found = res.data.find(item => String(item.id) === id);
                if (found) {
                    setPost(found);
                } else {
                    setError(`Post non trovato!`)
                }
                setLoading(false);
            })
            .catch(err => {
                setError(`Errore durante il caricamento!`);
                setLoading(false);
            })
    }, [id]);

    if (loading) return <h2 className="text-center my-4">Caricamento...</h2>
    if (error) return <h2 className="alert alert-danger">{error}</h2>

    return (
        <>
            <div className="container">
                <Link to="/posts" className="btn btn-primary my-5">&larr; Torna alla lista</Link>
                <div className="card w-50 text-center">
                    <h1 className="card-title">{post.name}</h1>
                    <img src={post.image} alt={post.name} />
                    <div className="card-body">
                        <p className="card-text"><strong>Anno di nascita:</strong> ${post.birth_year}</p>
                        <p className="card-text"><strong>Nazionalità:</strong> ${post.nationality}</p>
                        <p className="card-text"><strong>Biografia:</strong> ${post.biography}</p>
                        <p className="card-text"><strong>Riconoscimenti:</strong> ${post.awards}</p>
                    </div>
                </div>
            </div>
        </>
    );
}