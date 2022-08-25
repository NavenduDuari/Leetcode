/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const adjCourse = [];
    const inDegree = Array(numCourses).fill(0);
    let courseCompleted = 0;
    
    for (let i = 0; i < prerequisites.length; i++) {
        const [course, preCourse] = prerequisites[i];
        if (adjCourse[preCourse]) {
            adjCourse[preCourse].push(course);
        } else {
            adjCourse[preCourse] = [course];
        }
        
        inDegree[course]++;
    }
    
    const q = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            q.push(i);
        }
    }
    
    const res = [];
    
    while (q.length) {
        const preCourse = q.shift();
        courseCompleted++;
        res.push(preCourse);
        const courses = adjCourse[preCourse];
        if (courses) {
            for (let i = 0; i < courses.length; i++) {
                const course = courses[i];
                inDegree[course]--;
                
                if (inDegree[course] === 0) {
                    q.push(course);
                }
            }
        }
    }
    
    return courseCompleted === numCourses ? res : [];
};