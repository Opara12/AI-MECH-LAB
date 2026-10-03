import os
import glob
import json
import re

def process_all():
    files = {
        "1.1": "AI_Course_Module1_Topic1.1_WhatIsAIMLDL.txt",
        "1.2": "AI_Course_Module1_Topic1.2_RealWorldUseCases.txt",
        "1.3": "AI_Course_Module1_Topic1.3_EthicsAndLimitations.txt",
        "2.1": "AI_Course_Module2_Topic2.1_PythonEssentials.txt",
        "2.2": "AI_Course_Module2_Topic2.2_NumPyBasics.txt",
        "3.1": "AI_Course_Module3_Topic3.1_LinearAlgebraEssentials.txt",
        "3.2": "AI_Course_Module3_Topic3.2_ProbabilityAndStatistics.txt",
        "4.1": "AI_Course_Module4_Topic4.1_SupervisedVsUnsupervised.txt",
        "4.2": "AI_Course_Module4_Topic4.2_Regression.txt",
        "4.3": "AI_Course_Module4_Topic4.3_Classification(1).txt",
        "4.4": "AI_Course_Module4_Topic4.4_PredictOutcomeCapstone.txt",
    }
    
    data = {}
    for key, fname in files.items():
        path = os.path.join("extracted_texts", fname)
        if os.path.exists(path):
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            data[key] = {
                "file": fname,
                "raw": content,
                "length": len(content)
            }
    
    print("Loaded topics:", list(data.keys()))
    return data

if __name__ == "__main__":
    process_all()
