# HCI Thesis and Project Report Template

## General Information

This template is a guideline on how to create a thesis or project report. The template is designed to already meet typical requirements and will be updated in reasonable intervals. **However, it is your responsibility to check if current official regulations (i.e. your FSBs and the university's ASPO) or supervisor demands require alterations to this template.** More information concerning official regulations can for instance be found at the [MCS/HCI webpage](http://www.hci.uni-wuerzburg.de/mcs/?page_id=631). 

## How to get the template 

- Click _Download_ on this project's home menu
- Use a git client and clone the repository

## How to Run

Run LaTeX with [Latexmk](http://www.ctan.org/tex-archive/support/latexmk) using the following command in the root folder of your _.tex_ document:

```
latexmk -pdf -r pdflatexmkrc
```

### How to Install _Latexmk_

#### Mac

- Install latexmk with Tex Live Utility

#### Windows

- Follow the instructions on the _Latexmk_ webpage