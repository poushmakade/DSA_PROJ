function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
  }
  
  // Function to submit the pretest and posttest
  function submitTest(testType) {
    let formId = testType === 'pretest' ? 'pretest-form' : 'posttest-form';
    let feedbackId = testType === 'pretest' ? 'pretest-feedback' : 'posttest-feedback';
    let form = document.getElementById(formId);
    let feedback = document.getElementById(feedbackId);
    let score = 0;
    let totalQuestions = 10; // Adjust as necessary
  
    let inputs = form.querySelectorAll('input[type="radio"]:checked');
    inputs.forEach(input => {
      if (input.value === 'correct') {
        score++;
      }
    });
  
    feedback.innerHTML = `You scored ${score} out of ${totalQuestions}.`;
    form.reset();
  }
  
  // Optional: Add interactive animations for explaining hashing
  window.onload = function() {
    let hashAnimation = document.getElementById('hash-animation');
    hashAnimation.addEventListener('mouseover', function() {
      this.style.animationPlayState = 'paused';
    });
    hashAnimation.addEventListener('mouseout', function() {
      this.style.animationPlayState = 'running';
    });
  };