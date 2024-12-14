import React, { useState, useRef } from 'react';
import { RiFullscreenFill } from "react-icons/ri";
import { FaThumbsUp, FaThumbsDown, FaShareAlt, FaDownload } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
const PdfViewer = ({ notes,relatedData }) => {

    const [pdfLink, setPdfLink] = useState(notes.pdfLink);
    const viewerRef = useRef();

    

    const handlePdfSelection = (file) => {
        setPdfLink(file);
    };

    const toggleFullscreen = () => {
        if (viewerRef.current) {
            if (!document.fullscreenElement) {
                viewerRef.current.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }
    };
    const [openMenuId, setOpenMenuId] = useState(null);

    // open option menu
    const handleToggleMenu = (id) => {
        setOpenMenuId((prevId) => (prevId === id ? null : id));
    };
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="flex">
            {/* PDF Viewer Section */}
            <div className="w-[70%] p-2 h-[80vh]  relative" ref={viewerRef}>
                <iframe
                    src={pdfLink}
                    width="100%"
                    height="100%"
                    className="rounded-lg"
                />
                {/* Fullscreen Button */}
                <button
                    onClick={toggleFullscreen}
                    className="absolute bottom-4 right-10 text-white font-bold "
                >
                    <RiFullscreenFill size={30} />
                </button>
                {/* channel details */}
                <div >
                    {/* Title */}
                    <h1 className="text-xl font-bold my-2">{notes.title}</h1>

                    {/* Channel Info */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                            {/* Channel Logo */}
                            <img
                                src={notes.channel_logo}
                                alt="Channel Logo"
                                className="w-10 h-10 rounded-full"
                            />
                            {/* Channel Details */}
                            <div>
                                <p className="font-semibold">{notes.channel_name}</p>
                                <p className="text-sm text-gray-500">{notes.subscriber} subscriber </p>
                            </div>
                            <div className='bg-black text-white text-[1rem] px-5 py-3 rounded-full'>subscribe</div>
                        </div>
                        <div className="flex items-center space-x-4">
                            {/* Like and Dislike */}
                            <div className='flex shadow rounded-full '>
                                <div className="flex items-center gap-2 p-2  pl-6 hover:bg-gray-200 rounded-l-full cursor-pointer ">
                                    <FaThumbsUp className="text-lg" />
                                    <span className="font-semibold text-lg">763K</span>
                                </div>

                                {/* Dislike Button */}
                                <div className="flex items-center gap-2  cursor-pointer hover:bg-gray-200 rounded-r-full pr-6 p-2 border-l-2">
                                    <FaThumbsDown className="text-lg" />
                                </div>

                            </div>

                            {/* Share */}
                            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow hover:bg-gray-200 cursor-pointer">
                                <FaShareAlt className="text-gray-700" />
                                <span className="text-gray-700 font-semibold ml-2">Share</span>
                            </div>

                            {/* Download */}
                            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow hover:bg-gray-200 cursor-pointer">
                                <FaDownload className="text-gray-700" />
                                <span className="text-gray-700 font-semibold ml-2">Download</span>
                            </div>

                            {/* More Options */}
                            <div className="relative">
                                <button
                                    onClick={() => handleToggleMenu(notes.id)}
                                    className="bg-white px-4 py-2 rounded-full shadow hover:bg-gray-200 cursor-pointer">
                                    <BsThreeDots className="text-gray-700" />
                                </button>
                                {openMenuId === notes.id && (
                                    <div className="absolute right-0 w-60 bg-white rounded-xl shadow-md z-20">
                                        <ul className="py-1">
                                            {[
                                                "Save to watch later",
                                                "Save to playlist",
                                                "Report",
                                            ].map((option, index) => (
                                                <li
                                                    key={index}
                                                    className="px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors duration-200 ease-in-out"
                                                    onClick={() => onOptionClick(option)}
                                                >
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* description */}
                <div className="  bg-gray-100 shadow rounded-lg overflow-hidden mt-6 p-4">

                    <p className=" mt-1">
                        {notes.views} views {notes.time} ago
                    </p>
                    <div>
                        <span>
                            {isExpanded
                                ? notes.aboutCourse
                                : notes.aboutCourse.length <= 450
                                    ? notes.aboutCourse
                                    : `${notes.aboutCourse.slice(0, 450)}...  `}
                        </span>
                        {notes.aboutCourse.length > 100 && (
                            <button
                                onClick={handleToggle}
                                className=" font-semibold"
                            >
                                {isExpanded ? "Show Less" : "Show More"}
                            </button>
                        )}
                    </div>
                </div>

                {/*  */}
                <div className='h-10'>

                </div>


            </div>

            {/* Related PDFs Section */}
            <div className="w-[30%] bg-white p-4 ">
                <h2 className="text-lg font-bold mb-4">Related PDFs</h2>
                <ul>
                    {relatedData.map((data) => (
                        <li
                            key={data.id}
                            className="p-2 border-b cursor-pointer hover:bg-gray-200"
                            onClick={() => handlePdfSelection(data.file)}
                        >
                            <h3 className="text-md font-medium">{data.name}</h3>
                            <p className="text-sm text-gray-600">{data.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PdfViewer;
