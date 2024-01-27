import React, { useState, useEffect } from "react";
import CardGrid from "./CardGrid";
import "./App.css";
import MultiCheckboxGroup from "./MultiCheckboxGroup";
import "./MultiCheckboxGroup.css";
import "./CardGrid.css";
import SupportCard from './SupportCard';
import './SupportCard.css';


export default function App() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedDateOption, setSelectedDateOption] = useState("today");
  const [selectedDate, setSelectedDate] = useState("");
  const [cigarettesPerDay, setCigarettesPerDay] = useState("");
  const [costPerPack, setCostPerPack] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [selectedSupportOptions, setSelectedSupportOptions] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const handleDateOptionChange = (option) => {
    setSelectedDateOption(option);

    if (option === "pickDate") {
      setSelectedDate(new Date().toISOString().split("T")[0]);
      setShowDatePicker(true);
    } else {
      setSelectedDate("");
      setShowDatePicker(false);
    }
  };

  const handleDatePickerChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleCigarettesPerDayChange = (event) => {
    setCigarettesPerDay(event.target.value);
  };

  const handleCostPerPackChange = (event) => {
    setCostPerPack(event.target.value);
  };

  const handleTriggerSelectionChange = (trigger, selectedOptions) => {
    console.log(`Selected options for ${trigger}:`, selectedOptions);
  };

  const handleSupportOptionsChange = (optionType, selectedOptions) => {
    setSelectedSupportOptions({
      ...selectedSupportOptions,
      [optionType]: selectedOptions,
    });
  };

  useEffect(() => {
    const pickDateRadio = document.getElementById("pickDate");

    const handlePickDateChange = () => {
      setShowDatePicker(pickDateRadio.checked);
    };

    pickDateRadio.addEventListener("change", handlePickDateChange);

    return () => {
      pickDateRadio.removeEventListener("change", handlePickDateChange);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({
      selectedType,
      selectedDateOption,
      selectedDate,
      cigarettesPerDay,
      costPerPack,
      selectedSupportOptions,
    });
    console.log("Submitted Data:", submittedData);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 >Quit Smoking </h1>
      </div>

      <div className="section">
        <div>
          <img  className= "banner" src="banner.jpg"/>
          <p>
            Quitting all tobacco products is the best thing you can do for your
            health. Whether you smoke cigarettes, vape, or do both, creating a
            personalized quit plan makes it easier to stay on track, get through
            hard times, and quit for good.
          </p>
          
          <h2 style={{ textAlign: 'center' }}>Which type of tobacco are you quitting?</h2>
          <div className="btn">
          <button
            
            onClick={() => handleTypeSelect("cigarettes")}
            className={selectedType === "cigarettes" ? "active" : ""}
            style={{ textAlign: 'center' ,backgroundColor: selectedType === "cigarettes" ? "green" : "" }}
          >
            Cigarettes
          </button>
          <button
            onClick={() => handleTypeSelect("vapes")}
            className={selectedType === "vapes" ? "active" : ""}
            style={{  textAlign: 'center' , backgroundColor: selectedType === "vapes" ? "blue" : "" }}
          >
            Vapes
          </button>
          </div>
          
        </div>
      </div>

      <div className="section">
        <div>
          <img src="time.jpg" alt="" className="src" />
          <p>
            Pick a day in the next two weeks. This will give you enough time to
            prepare. Pick a date that isn’t already likely to be a stressful
            one.
          </p>
          <h2 style={{ textAlign: 'center' }}>When is your quit date?</h2>
          <div className="center-container">
      <fieldset className="radio-group">
        <legend>Select a date:</legend>
        <div>
          <input
            type="radio"
            id="today"
            name="dateOption"
            value="today"
            checked={selectedDateOption === 'today'}
            onChange={() => handleDateOptionChange('today')}
            required
          />
          <label htmlFor="today">Today</label>
        </div>
        <div>
          <input
            type="radio"
            id="tomorrow"
            name="dateOption"
            value="tomorrow"
            checked={selectedDateOption === 'tomorrow'}
            onChange={() => handleDateOptionChange('tomorrow')}
            required
          />
          <label htmlFor="tomorrow">Tomorrow</label>
        </div>
        <div>
          <input
            type="radio"
            id="pickDate"
            name="dateOption"
            value="pickDate"
            checked={selectedDateOption === 'pickDate'}
            onChange={() => handleDateOptionChange('pickDate')}
            required
          />
          <label htmlFor="pickDate">Pick my date</label>
          <input
            type="date"
            id="datePicker"
            className="date-picker"
            style={{
              display: selectedDateOption === 'pickDate' ? 'inline-block' : 'none',
            }}
            value={selectedDate}
            onChange={handleDatePickerChange}
          />
        </div>
        <div>
          <input
            type="radio"
            id="notReady"
            name="dateOption"
            value="notReady"
            checked={selectedDateOption === 'notReady'}
            onChange={() => handleDateOptionChange('notReady')}
            required
          />
          <label htmlFor="notReady">Not ready</label>
        </div>
      </fieldset>
    </div>
        </div>
      </div>

      <div className="section cost-section">
        <section>
          <img src="cost.jpg" alt="" className="src" />
          <h1 style={{textAlign: 'center'}}  >What Is Smoking Costing You?</h1>
          <p>
            Enter how many cigarettes you smoke and how much a pack of
            cigarettes costs. You'll find out how much money you can save by
            quitting.
          </p>
          <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="cost-inputs">
        <div className="cost-img"><img
          src="https://smokefree.gov/themes/custom/smokefree_teen/images/vaping-quit-plan/calculator-icon-2x.png"
          alt="Blank Image"
          style={{ width: '70px', height: '70px' }}
        /></div>
        <div><p>I smoke about</p>
        <input
          type="number"
          placeholder="5"
          value={cigarettesPerDay}
          onChange={handleCigarettesPerDayChange}
          className="number-input"
        />
        <p>cigarettes each day.</p>

        <p>I spend about $</p>
        <input
          type="number"
          placeholder="6"
          value={costPerPack}
          onChange={handleCostPerPackChange}
          className="number-input"
        />
        <p>per pack of cigarettes.</p></div>
      </div>
    </div>

          </div>
        </section>
      </div>

      <div className="section reasons-section">
        <img src="quit.jpg" alt="" className="src" />
        <h1 style={{ textAlign: 'center' }}>Why Are You Quitting?</h1>
        <p>
          Knowing your reasons for why you want to quit smoking can help you
          stay motivated and on track, especially in difficult moments.
        </p>
        <h2>My reasons for quitting</h2>
        <div className="card-grid">
          <CardGrid />
        </div>
      </div>

      <div>
        <img src="trigger.jpg" alt="" className="src" />
        <h1 style={{textAlign:"center"}}>Know Your Triggers</h1>
        <p>
          After you stop smoking, certain places, situations, and feelings can
          make it hard to stay smokefree. Use this list to find what makes you
          want to smoke. We’ll give you strategies that will help you stay in
          control.
        </p>

        <div>
          <div>
            <MultiCheckboxGroup
              title="Social Situations"
              options={[
                "Being offered a cigarette",
                "Drinking alcohol or going to a bar",
                "Going to a party or other social event",
                "Being around others who smoke or use another tobacco product",
                "Seeing someone else smoke",
                "Smelling cigarette smoke",
              ]}
              onSelectionChange={(selectedOptions) =>
                handleTriggerSelectionChange(
                  "Social Situations",
                  selectedOptions
                )
              }
            />

            <MultiCheckboxGroup
              title="Nicotine Withdrawal"
              options={[
                "Feeling irritable if I haven’t smoked in a while",
                "Feeling restless or jumpy",
                "Feeling strong cravings to smoke",
                "Having a hard time concentrating",
                "Waking up in the morning",
              ]}
              onSelectionChange={(selectedOptions) =>
                handleTriggerSelectionChange(
                  "Nicotine Withdrawal",
                  selectedOptions
                )
              }
            />

            <MultiCheckboxGroup
              title="Routine Situations"
              options={[
                "Being on my phone",
                "Down time or in between activities",
                "Drinking coffee",
                "Finishing a meal",
                "Seeing cigarettes on TV or in movies",
                "Waiting for the bus or a ride",
                "Walking or driving",
                "Watching TV or playing video games",
                "Working or studying",
              ]}
              onSelectionChange={(selectedOptions) =>
                handleTriggerSelectionChange(
                  "Routine Situations",
                  selectedOptions
                )
              }
            />

            <MultiCheckboxGroup
              title="My Emotions "
              options={[
                "Angry",
                "Anxious, worried, or nervous",
                "Bored",
                "Frustrated or upset",
                "Happy or excited",
                "Lonely",
                "Sad, down, or depressed",
                "Stressed or overwhelmed",
              ]}
              onSelectionChange={(selectedOptions) =>
                handleTriggerSelectionChange("My Emotions", selectedOptions)
              }
            />
          </div>
        </div>
        <div>
          <img src="girl.jpg" alt="" className="src" />
          <h1 style={{textAlign:"center"}}>Set Yourself Up for Success</h1>
          <p>
            Choose strategies and tools to help you quit. When preparing to
            quit, set yourself up for success by thinking about who in your life
            you will reach out to for support, how you will get expert help, and
            how you will distract yourself when you have the urge to smoke. This
            will keep you on track and boost your chances of quitting for good.
            Your quit plan will have more information on the options you select
            and how to get expert help.
          </p>

        </div>
        <div>
          {}

          <SupportCard
            title="This is how I will reach out for support:"
            options={[
              'Share my plans to quit with people important to me.',
              'Find a quit buddy.',
              'Ask for advice or support from someone who has successfully quit.',
              'Join a social media community with other people who are trying to quit.',
              'Reach out to someone else close to me not listed here.',
            ]}
            onSelectionChange={(selectedOptions) =>
              handleSupportOptionsChange('Reach Out for Support', selectedOptions)
            }
          />

          <SupportCard
            title="This is how I will get help from experts:"
            options={[
              'Talk to my doctor, pharmacist, or other health care professional about how to quit smoking.',
              'Look for in-person quit-smoking counseling in my area.',
              'Call a quitline to talk one-on-one with a trained counselor to help me quit.',
              'Sign up for a Smokefree text message program to get daily tips and support.',
              'Download a Smokefree app to help me track cravings, get tips, and monitor my progress.',
              'Chat online with a trained quit counselor.',
              'Find another way to connect with an expert for help.',
            ]}
            onSelectionChange={(selectedOptions) =>
              handleSupportOptionsChange('Get Help from Experts', selectedOptions)
            }
          />

          <SupportCard
            title="When a craving hits, I will distract myself by:"
            options={[
              'Drinking a glass of water.',
              'Eating something crunchy like carrots, apples, or sunflower seeds.',
              'Taking 10 deep breaths.',
              'Getting some exercise.',
              'Playing a game on my phone or listening to a podcast or audiobook.',
              'Texting or talking with someone who supports me.',
              'Going to a place where smoking isn’t allowed.',
            ]}
            onSelectionChange={(selectedOptions) =>
              handleSupportOptionsChange('Distract Myself', selectedOptions)
            }
          />

          {}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
