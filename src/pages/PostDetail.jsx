import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(``);
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        axios
            .get(`https://lanciweb.github.io/demo/api/actresses/`)
            .then(res => {
                const found = res.data.find(item => String(item.id) === id);
                if (found) {
                    setPost(found);
                    setAllPosts(res.data);
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

    const currentId = Number(id);

    if (loading) return <h2 className="text-center my-4">Caricamento...</h2>
    if (error) return <h2 className="alert alert-danger">{error}</h2>

    return (
        <>
            <Link to="/posts" className="btn btn-primary m-5 w-25">&larr; Torna alla lista</Link>
            <div className="container d-flex flex-column align-items-center">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img className="img-fluid rounded-start object-fit-cover w-100" src={post.image} alt={post.name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title fw-bold">{post.name}</h1>
                                <p className="card-text fs-3"><strong>Anno di nascita:</strong> ${post.birth_year}</p>
                                <p className="card-text fs-3"><strong>Nazionalità:</strong> ${post.nationality}</p>
                                <p className="card-text fs-3"><strong>Biografia:</strong> ${post.biography}</p>
                                <p className="card-text fs-3"><strong>Riconoscimenti:</strong> ${post.awards}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-5">
                    {currentId > 1 && (
                        <Link to={`/posts/${currentId - 1}`} className="btn btn-primary">Precedente</Link>
                    )}
                    {currentId < 40 && (
                        <Link to={`/posts/${currentId + 1}`} className="btn btn-primary">Successivo</Link>
                    )}
                </div>
            </div>
        </>
    );
}