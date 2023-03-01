import React from 'react'
import PageHeader from '../../../components/PageHeader'
import CoursesRow from '../../../components/Student/CoursesRow'

const Courses = () => {
  return (
    <div>
        <PageHeader icon={'+'} onClick={()=>alert('clicked')}>Courses</PageHeader>
        <div className='flex items-center justify-center'>
        <div className='flex flex-col w-11/12 gap-2 p-2 mt-8 md:w-8/12'>
            <CoursesRow/>
            <CoursesRow/>
            <CoursesRow/>
            <CoursesRow/>
        </div>
        </div>
    </div>
  )
}

export default Courses