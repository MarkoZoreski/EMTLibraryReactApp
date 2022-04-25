import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import LibraryService from "../../../repository/libraryRepository";

const BookEdit = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: props.categories[0],
        authorid: props.authors[0].id,
        availableCopies: 0
    })

    useEffect(() => {
        LibraryService.getBook(id)
            .then((data) => {
                const obj = {
                    name: data.data.name,
                    category: data.data.category,
                    author: data.data.author.id,
                    availableCopies: data.data.availableCopies
                }
                updateFormData(obj)
            })
    },[])
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.book.name;
        const category = formData.category !== 0 ? formData.category : props.book.category.id;
        const authorid = formData.authorid !== 0 ? formData.authorid : props.book.authorid;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;

        props.onEditBook(props.book.id, name, category, authorid, availableCopies);
        navigate("/books");
    }

    console.log(formData);

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.book.name}
                               value={formData.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select type="text"
                                className="form-control"
                                id="category"
                                name="category"
                                placeholder={props.book.category}
                                value={formData.category}
                                onChange={handleChange}>
                            {props.categories.map((term, i) =>
                                <option key={i} value={term}>{term}</option>
                            )}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="authorid">Author</label>
                        <select type="text"
                                className="form-control"
                                id="authorid"
                                name="authorid"
                                placeholder={props.book.authorid}
                                value={formData.authorid}
                                onChange={handleChange}>
                            {props.authors.map((term, i) =>
                                <option key={i} value={term.id}>{term.name} {term.surname}</option>
                            )}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="availableCopies">Available copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.book.availableCopies}
                               value={formData.availableCopies}
                               onChange={handleChange}
                        />
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default BookEdit;
