import React, { useEffect, useRef } from 'react';
import useLinkNewTab from './hooks/useLinkNewTab';
import useHover from './hooks/useHover';
import { styled } from 'styled-components';

const Blog = () => {
   const {contentRef} = useLinkNewTab();
   const {hover, nodeRef}  = useHover()
    return (
        <div ref={contentRef} >
            <p>State giống như một kho lưu trữ dữ liệu cho các component trong 
                ReactJS. Nó chủ yếu được sử dụng để cập nhật component khi người dùng thực hiện một số hành động như nhấp vào nút,
                 nhập một số văn bản, {""} <a href='https://www.google.com/'>google.com</a>
                  nhấn một số phím, v.v. React. Component là lớp cơ sở cho tất cả các lớp component cơ bản khác trong ReactJS.

                  State giống như một kho lưu trữ dữ liệu cho các component trong 
                ReactJS. Nó chủ yếu được sử dụng để cập nhật component khi người dùng thực hiện một số hành động như nhấp vào nút,
                 nhập một số văn bản,{""}  <a href='https://www.google.com/' >google.com</a>
                  nhấn một số phím, v.v. React. Component là lớp cơ sở cho tất cả các lớp component cơ bản khác trong ReactJS.
                 
                 </p>
        </div>
    );
};

export default Blog;