import BlogList from "../components/elements/BlogList";
import BlogSidebar from "../components/elements/BlogSidebar";
import Layout from "../components/layout/Layout";
import BlogFilter from './../components/elements/BlogFilter';

function PageBlogList() {
    return (
        <>
            <Layout parent="Home" sub="Blog" subChild="List">
                <section className="mt-50 mb-50">
                    <div className="container custom">
                        <div className="row">
                            <div className="col-lg-9">
                            <div className="shop-product-fillter mb-50 pr-30">
                                    <BlogFilter/>
                                </div>
                                <div className="loop-grid loop-list pr-30">
                                    <BlogList show={6} />
                                </div>
                                <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-start">
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="fi-rs-arrow-small-left"></i>
                                                </p>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    1
                                                </p>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    2
                                                </p>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                                                </p>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link dot"
                                                    href="#"
                                                >
                                                    ...
                                                </p>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    6
                                                </p>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="fi-rs-arrow-small-right"></i>
                                                </p>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3 primary-sidebar sticky-sidebar">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default PageBlogList;
