import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft:'25%',
    width: '80%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
}));

function getSteps() {
  return ['Select Speciality', 'Choose your doctor', 'booking'];
}
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return ( 
        <FormControl component="fieldset">
      <FormLabel component="legend">Choose a Field</FormLabel>
      <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
        <FormControlLabel value="Allergy And Immunology" control={<StyledRadio />} label="Allergy And Immunology" />
        <FormControlLabel value="Colon And Rectal Surgery" control={<StyledRadio />} label="Colon And Rectal Surgery" />
        <FormControlLabel value="Emergency Medicine" control={<StyledRadio />} label="Emergency Medicine" />
        <FormControlLabel value="Internal Medicine" control={<StyledRadio />} label="Internal Medicine" />
        <FormControlLabel value="Neurological Surgery" control={<StyledRadio />} label="Neurological Surgery" />
        <FormControlLabel value="Obstetrics and Gynecology" control={<StyledRadio />} label="Obstetrics and Gynecology" />
        <FormControlLabel value="Orthopaedic Surgery" control={<StyledRadio />} label="Orthopaedic Surgery" />
        <FormControlLabel value="Pathology" control={<StyledRadio />} label="Pathology" />
        <FormControlLabel value="Physical Medicine And rehabilitation" control={<StyledRadio />} label="Physical Medicine And rehabilitation" />
        <FormControlLabel value="Preventive Medicine" control={<StyledRadio />} label="Preventive Medicine" />
        <FormControlLabel value="Radiology" control={<StyledRadio />} label="Radiology" />
        <FormControlLabel value="Thoracic Surgery" control={<StyledRadio />} label="Thoracic Surgery" />
        <FormControlLabel value="Anesthesiology" control={<StyledRadio />} label="Anesthesiology" />
        <FormControlLabel value="Dermatology" control={<StyledRadio />} label="Dermatology" />
        <FormControlLabel value="Family Medicine" control={<StyledRadio />} label="Family Medicine" />
        <FormControlLabel value="Medical Genetics And Genomics" control={<StyledRadio />} label="Medical Genetics And Genomics" />
        <FormControlLabel value="Nuclear Medicine" control={<StyledRadio />} label="Nuclear Medicine" />
        <FormControlLabel value="Opthalmology" control={<StyledRadio />} label="Opthalmology" />
        <FormControlLabel value="Otolaryngology-Head and Neck Surgery" control={<StyledRadio />} label="Otolaryngology-Head and Neck Surgery" />
        <FormControlLabel value="Pediatrics" control={<StyledRadio />} label="Pediatrics" />
        <FormControlLabel value="Plastic Surgery" control={<StyledRadio />} label="Plastic Surgery" />
        <FormControlLabel value="Psychiatry And Neurology" control={<StyledRadio />} label="Psychiatry And Neurology" />
        <FormControlLabel value="Surgery" control={<StyledRadio />} label="Surgery" />
        <FormControlLabel value="Urology" control={<StyledRadio />} label="Urology" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<StyledRadio />}
          label="(Disabled option)"
        />
      </RadioGroup>
    </FormControl>
      );
    case 1:
      return 'Step 2: Select a doctor';
    case 2:
      return 'Step 3: Complete the process';
    default:
      return 'Unknown step';
  }
}

export default function HorizontalNonLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography> */}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                  </Button>
                ))}
                <br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
          </div>
        )}
      </div>
    </div>
  );
}
