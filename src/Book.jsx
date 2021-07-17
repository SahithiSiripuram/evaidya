import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "25%",
    width: "80%",
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function getSteps() {
  return ['Select Speciality and doctor',  'Choose Slot', 'Enter Patient Details','Login or Signup','Payment'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        "Step 1: Select speciality and doctor",
        (
          <FormControl>
            <InputLabel id="demo-simple-select-label">Specialization</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={1}>Allergists/Immunologists</MenuItem>
              <MenuItem value={2}>Anesthesiologists</MenuItem>
              <MenuItem value={3}>Cardiologists</MenuItem>
              <MenuItem value={4}>Colon and Rectal Surgeons</MenuItem>
              <MenuItem value={5}>Critical Care Medicine Specialists</MenuItem>
              <MenuItem value={6}>Dermatologists</MenuItem>
              <MenuItem value={7}>Endocrinologists</MenuItem>
              <MenuItem value={8}>Emergency Medicine Specialists</MenuItem>
              <MenuItem value={9}>Family Physicians</MenuItem>
              <MenuItem value={10}>Gastroenterologists</MenuItem>
              <MenuItem value={11}>Geriatric Medicine Specialists</MenuItem>
              <MenuItem value={12}>Hematologists</MenuItem>
              <MenuItem value={13}>
                Hospice and Palliative Medicine Specialists
              </MenuItem>
              <MenuItem value={14}>Infectious Disease Specialists</MenuItem>
              <MenuItem value={15}>Internists</MenuItem>
              <MenuItem value={16}>Medical Geneticists</MenuItem>
              <MenuItem value={17}>Nephrologists</MenuItem>
              <MenuItem value={18}>Neurologists</MenuItem>
              <MenuItem value={19}>Obstetricians and Gynecologists</MenuItem>
              <MenuItem value={20}>Oncologists</MenuItem>
              <MenuItem value={21}>Ophthalmologists</MenuItem>
              <MenuItem value={22}>Osteopaths</MenuItem>
              <MenuItem value={23}>Otolaryngologists</MenuItem>
              <MenuItem value={24}>Pathologists</MenuItem>
              <MenuItem value={25}>Pediatricians</MenuItem>
              <MenuItem value={26}>Physiatrists</MenuItem>
              <MenuItem value={27}>Plastic Surgeons</MenuItem>
              <MenuItem value={28}>Podiatrists</MenuItem>
              <MenuItem value={29}>Preventive Medicine Specialists</MenuItem>
              <MenuItem value={30}>Psychiatrists</MenuItem>
              <MenuItem value={31}>Pulmonologists</MenuItem>
              <MenuItem value={32}>Radiologists</MenuItem>
              <MenuItem value={33}>Rheumatologists</MenuItem>
              <MenuItem value={34}>Sleep Medicine Specialists</MenuItem>
              <MenuItem value={35}>Sports Medicine Specialists</MenuItem>
              <MenuItem value={36}>General Surgeons</MenuItem>
              <MenuItem value={37}>Urologists</MenuItem>
            </Select>
          </FormControl>
        ),
        
      );
    case 1:
      return "Step 3: Choose Slot";
    case 2:
      return "Step 4: Enter Patient Details";
    case 3:
      return "Step 5: Login";
    case 4:
      return "Step 6: Payment";
    default:
      return "Unknown step";
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
        ?
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

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepButton
                    onClick={handleStep(index)}
                    completed={completed[index]}
                  >
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {allStepsCompleted() ? (
                <div>
                  <Typography className={classes.instructions}>
                    You&apos;re slot has been booked
                  </Typography>
                </div>
              ) : (
                <div>
                  <Typography className={classes.instructions}>
                    {getStepContent(activeStep)}
                  </Typography>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    {activeStep !== steps.length && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleComplete}
                      >
                        {completedSteps() === totalSteps() - 1
                          ? "Finish"
                          : "Next"}
                      </Button>
                    )}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              )}
            </div>
        </Grid>
      </Grid>
    </div>
  );
}
