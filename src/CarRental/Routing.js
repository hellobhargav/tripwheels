import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
// Public Pages
const Hero = lazy(() => import('./Hero'))
const About = lazy(() => import('./About'))
const Cars = lazy(() => import('./Cars'))
const Contact = lazy(() => import('./Contact'))
const CarDetails = lazy(() => import('./CarDetails'))
const NoPage = lazy(() => import('./NoPage'))

// Admin Pages
const AdminLogin = lazy(() => import('./Admin/AdminLogin'))
const Dashboard = lazy(() => import('./Admin/Dashboard'))
const Welcome = lazy(() => import('./Admin/Welcome'))
const AddCar = lazy(() => import('./Admin/AddCar'))
const ViewCars = lazy(() => import('./Admin/ViewCars'))
const ViewBookings = lazy(() => import('./Admin/ViewBookings'))
const ViewReviews = lazy(() => import('./Admin/ViewReviews'))
const AddService = lazy(() => import('./Admin/AddService'))
const ViewServices = lazy(() => import('./Admin/ViewServices'))

const Routing = () => {
    return (
        <Suspense fallback={<h2 className='text-center text-primary'><span className='spinner-border'></span></h2>}>
            <Routes>
                <Route path='/' Component={Hero} />
                <Route path='/about' Component={About} />
                <Route path='/cars' Component={Cars} />
                <Route path='/carDetails/:id' Component={CarDetails} />
                <Route path='/contact' Component={Contact} />
                <Route path='/admin' Component={AdminLogin} />
                <Route path='/dashboard' Component={Dashboard} >
                    <Route path='' Component={Welcome} />
                    <Route path='addCar' Component={AddCar} />
                    <Route path='viewCars' Component={ViewCars} />
                    <Route path='viewBookings' Component={ViewBookings} />
                    <Route path='viewReviews' Component={ViewReviews} />
                    <Route path='addService' Component={AddService} />
                    <Route path='viewServices' Component={ViewServices} />
                </Route>
                <Route path='*' Component={NoPage} />
            </Routes>
        </Suspense>
    )
}

export default Routing