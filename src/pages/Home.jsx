import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Details from './Details'

const Home = () => {
    const { todos } = useSelector(state => state.store)

    return <>


        <div className="container">
            <div className="row">
                {
                    todos.map((item, i) =>
                        <div key={item.id} className="col-sm-4 mt-4">
                            <div class="card bg-dark text-light border-4 border shadow">
                                <div class="card-header text-center bg-warning">
                                    <div className='fs-4 shadow text-dark fw-bold'>{item.name}</div>
                                </div>
                                <div class="card-body text-center">
                                    <img className='img-fluid bg-dark' src={item.hero} alt="" />
                                </div>
                                <div class="fs-4 card-footer text-center fw-bold border border-4 border-light">{item.desc}</div>
                                <Link to={`/detail/${i}`}>Details</Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >

    </>
}

export default Home