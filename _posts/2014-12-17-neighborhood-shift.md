---
layout: post
title:  "Neighborhood Shift: Flexible Indexing for Neighborhood Change Analysis"
date:   2014-12-17 11:38:16 -0500
categories: [analysis,webdev]
image: neighborhoodChange.png
descrip: "Python-based tools for ArcGIS to automate the analysis of neighborhood change"
link: https://github.com/adriennemcd/neighborhood-change-index
---
For this project, I developed a set of Python-based tools for ArcGIS to automate the analysis of neighborhood change over time.<!--more-->  This toolkit was inspired by a method of analysis described in Alan Mallach’s 2008 report Managing Neighborhood Change: A Framework for Sustainable and Equitable Revitalization.

The first tool creates a raw score of the user’s chosen indicators of housing demand by calculating and summing the z-scores of each indicator, and then grouping the raw scores into a user specified number of index categories using either the Quantile or Equal Interval classification method. A second tool analyzes the indices over time and outputs a shapefile with a new rating indicating if there is an index value change in each census tract and if so, how much and in which direction.

This information could then be used to formulate strategies for “sustainable and equitable revitalization” based on which state of change each tract is currently experiencing. While this toolkit was developed with neighborhood change analysis in mind, it is very flexible and can be used for other purposes. The user is able to choose how many variables will make up the index and at what geographic level they are aggregated, if some of those variables should detract from the raw score, whether the index should be calculated using the quantile or equal interval classification method, and how many index categories there should be.