/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
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
        
        inDegree[course] = inDegree[course] + 1;
    }
    
    const q = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) q.push(i);
    }
    
    while (q.length) {
        const preCourse = q.shift();
        courseCompleted++;
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
    
    return courseCompleted === numCourses;
};