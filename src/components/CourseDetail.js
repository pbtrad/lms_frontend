import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

function CourseDetail() {
    let {course_id} = useParams();
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-4'>
                    <img src="/logo512.png" class="img-thumbnail" alt="..." />
                </div>
                <div className='col-8'>
                    <h3>Course title</h3>
                    <p>Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the image in a card.</p>
                    <p className='fw-bold'>Course By: <a href='#'>Teacher 1</a></p>
                    <p className='fw-bold'>Duration: 3 Hours 30 Minutes</p>
                    <p className='fw-bold'>Total Enrolled: 200 Students</p>
                    <p className='fw-bold'>Rating: 4/5</p>
                </div>
            </div>
            {/* Videos */}
            <div className='card mt-4'>
                <h5 className='card-header'>
                    Course Videos
                </h5>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>Introduction <span className='float-end'>
                        <span className='me-5'>1 Hour 30 Minutes mins</span>
                        <button className='btn btn-sm btn-danger'><i className='bi-youtube'></i></button></span></li>
                        <li className='list-group-item'>Introduction <span className='float-end'>
                        <span className='me-5'>1 Hour 30 Minutes mins</span>
                        <button className='btn btn-sm btn-danger'><i className='bi-youtube'></i></button></span></li>
                        <li className='list-group-item'>Introduction <span className='float-end'>
                        <span className='me-5'>1 Hour 30 Minutes mins</span>
                        <button className='btn btn-sm btn-danger'><i className='bi-youtube'></i></button></span></li>
                        <li className='list-group-item'>Introduction <span className='float-end'>
                        <span className='me-5'>1 Hour 30 Minutes mins</span>
                        <button className='btn btn-sm btn-danger'><i className='bi-youtube'></i></button></span></li>
                        <li className='list-group-item'>Introduction <span className='float-end'>
                        <span className='me-5'>1 Hour 30 Minutes mins</span>
                        <button className='btn btn-sm btn-danger'><i className='bi-youtube'></i></button></span></li>
                </ul>
            </div>
            <h3 className="pb-1 mb-4 mt-5">Related Courses</h3>
        <div className="row">
            <div className="col-md-3">
            <div class="card">
                <Link to="/detail/1"><img src="/logo512.png" class="card-img-top" alt="..."></img></Link>
                    <div class="card-body">
                        <h5 class="card-title"><Link to="/detail/1">Course title</Link></h5>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
            <div class="card">
                <a href="#"><img src="/logo512.png" class="card-img-top" alt="..."></img></a>
                    <div class="card-body">
                        <h5 class="card-title"><a href="#">Course title</a></h5>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default CourseDetail;